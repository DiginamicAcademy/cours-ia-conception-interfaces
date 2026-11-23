// Servir le dossier courant en HTTP, le temps d'un audit Lighthouse.
//
// Pourquoi ce fichier existe : Lighthouse ne juge pas une page ouverte en `file://`.
// Il lui faut une adresse en `http://`. Ce petit serveur tient en trente lignes et ne
// dépend de rien d'autre que Node — pas de paquets supplémentaires à télécharger en salle.
//
//   npm run servir        puis   http://localhost:8000/rendus/…
//
// C'est un outil de salle de cours, pas un serveur pour autre chose : il lit des fichiers
// depuis le disque, il écoute sur la machine uniquement, il ne fait rien d'autre.

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT ?? 8000);
const racine = process.cwd();

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
};

createServer(async (requete, reponse) => {
  const url = decodeURIComponent(new URL(requete.url, "http://localhost").pathname);
  // On s'assure qu'aucun chemin ne remonte au-dessus du dossier servi.
  const propre = normalize(url).replace(/^(\.\.[/\\])+/, "");
  const cible = url.endsWith("/") ? join(racine, propre, "index.html") : join(racine, propre);

  try {
    const contenu = await readFile(cible);
    const type = types[extname(cible).toLowerCase()] ?? "application/octet-stream";
    reponse.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" });
    reponse.end(contenu);
  } catch {
    reponse.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    reponse.end(`Introuvable : ${url}\n`);
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Servi sur http://localhost:${port}/  (Ctrl+C pour arrêter)`);
  console.log(`Depuis ce dossier : ${racine}`);
  console.log(`Vos pages sont sous http://localhost:${port}/rendus/`);
});
