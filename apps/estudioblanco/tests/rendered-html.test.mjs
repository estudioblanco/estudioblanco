import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    }
  );
}

test("server-renders the approved Estudio Blanco landing", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>Estudio Blanco — Diseño, software e investigación<\/title>/i);
  assert.match(html, /Diseñamos sistemas simples para resolver problemas complejos\./);
  assert.match(html, /id="proyectos"/);
  assert.match(html, /id="visita"/);
  assert.match(html, /logo_left\.svg/);
  assert.match(html, /logo_center\.svg/);
  assert.match(html, /Contratar Estudio/);
  assert.doesNotMatch(html, /Sign in required|application shell|Your site is taking shape/i);
});

test("keeps production assets and accessibility safeguards in place", async () => {
  const [page, layout, interactions, logoLeft, logoCenter, favicon] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/refinement.css", import.meta.url), "utf8"),
    access(new URL("../public/logo_left.svg", import.meta.url)),
    access(new URL("../public/logo_center.svg", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
  ]);

  assert.equal(logoLeft, undefined);
  assert.equal(logoCenter, undefined);
  assert.equal(favicon, undefined);
  assert.match(page, /<Hero \/>/);
  assert.match(page, /<Projects \/>/);
  assert.match(page, /<FinalCTA \/>/);
  assert.match(layout, /favicon\.png/);
  assert.match(interactions, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(interactions, /channel[- ]split|scanline|shake|flash/i);
});
