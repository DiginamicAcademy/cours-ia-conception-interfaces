// Vérifier le kit avant de compter dessus.
//
//   npm run docteur
//
// Il répond à trois questions, dans l'ordre où elles posent problème :
//   1. Node est-il assez récent pour le validateur ?
//   2. Le validateur est-il bien installé ici ?
//   3. Y a-t-il au moins une page à valider ?
//
// Une seule ligne par réponse, [OK] ou [KO]. Sortie 1 s'il manque quelque chose :
// un script qui échoue en silence est un script qu'on ne croit plus.

import { readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const racine = process.cwd();
const resultats = [];

function rendre(ligne, ok, detail) {
  resultats.push({ ligne, ok, detail });
}

// 1. La version de Node. Le validateur exige ^22.22.0 ou >= 24.8.0 — relevé sur le
//    registre npm le 23/11/2026. Notez que Node 23 et Node 24.0 à 24.7 ne passent pas.
const [majeur, mineur] = process.versions.node.split(".").map(Number);
const nodeConvient =
  (majeur === 22 && mineur >= 22) || (majeur > 22 && majeur < 24 ? false : majeur >= 24 && (majeur > 24 || mineur >= 8));
rendre(
  `Node ${process.versions.node}`,
  nodeConvient,
  nodeConvient ? "convient" : "il faut 22.22 ou plus (branche 22), ou 24.8 ou plus — prévenez le formateur",
);

// 2. Le validateur, présent et à la version attendue.
const versionAttendue = "11.21.1";
try {
  const manifeste = JSON.parse(await readFile(join(racine, "node_modules/html-validate/package.json"), "utf8"));
  rendre(
    `html-validate ${manifeste.version}`,
    manifeste.version === versionAttendue,
    manifeste.version === versionAttendue ? "installé" : `installé, mais la version du kit est ${versionAttendue}`,
  );
} catch {
  rendre("html-validate", false, "absent de ce dossier — le kit doit être copié tel quel, avec node_modules");
}

// 3. Une configuration, et des pages à passer au crible.
try {
  await stat(join(racine, ".htmlvalidate.json"));
  rendre("configuration .htmlvalidate.json", true, "présente");
} catch {
  rendre("configuration .htmlvalidate.json", false, "absente — le kit est incomplet");
}

let pages = 0;
try {
  const fichiers = await readdir(join(racine, "rendus"), { recursive: true });
  pages = fichiers.filter((f) => String(f).endsWith(".html")).length;
} catch {
  pages = -1;
}
if (pages === -1) {
  rendre("dossier rendus/", false, "introuvable — c'est là que va votre écran généré");
} else {
  rendre(`${pages} page(s) html dans rendus/`, pages > 0, pages > 0 ? "prêtes" : "déposez-y d'abord l'écran à tenir");
}

for (const { ligne, ok, detail } of resultats) {
  console.log(`${ok ? "[OK]" : "[KO]"}  ${ligne} — ${detail}`);
}

const ko = resultats.filter((r) => !r.ok).length;
console.log(ko === 0 ? "\nLe kit est prêt." : `\n${ko} problème(s) à régler avant d'aller plus loin.`);
process.exit(ko === 0 ? 0 : 1);
