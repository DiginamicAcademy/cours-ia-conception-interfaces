# Les deux capteurs

Un kit déjà installé, pour ne rien faire télécharger en salle. Il contient les deux capteurs des
deux jours : **html-validate**, qui lit vos fichiers HTML à la ligne de commande, et **Lighthouse**,
qui n'est pas un paquet — il est déjà dans les outils de développement du navigateur, et c'est le
seul des deux à juger ce que la page donne à l'écran.

```
kit-capteurs/
├── package.json          les deux commandes, et rien d'autre
├── .htmlvalidate.json    le réglage du validateur (le jeu « recommandé »)
├── verifier.mjs          l'état des lieux du kit, en trois lignes
├── servir.mjs            un serveur HTTP de trente lignes, sans dépendance
└── node_modules/         le validateur, déjà là (jamais commité, jamais téléchargé en salle)
```

## Avant de toucher aux commandes

```
node -v
npm run docteur
```

`node -v` doit répondre **22.22 ou plus** dans la branche 22, ou **24.8 ou plus** dans la 24. Le
validateur est écrit pour ces versions : un poste plus ancien installe quand même — npm se
contente d'un avertissement — puis échoue sur une erreur de syntaxe qui ne veut rien dire pour
vous. `npm run docteur` règle ce malentendu : il répond si Node convient, si le validateur est
bien là, et s'il y a une page à valider.

Copiez le dossier **en entier**, avec son `node_modules`. Un `node_modules` recopié d'un système
d'exploitation à l'autre perd ses lanceurs : c'est pourquoi les commandes d'ici appellent le
fichier d'entrée directement, avec `node`, et passent sur Windows comme sur Linux.

## Les deux commandes

```
npm run valider      passe rendus/ au crible, répond fichier:ligne:colonne
npm run servir       sert le dossier, puis http://localhost:8000/rendus/
```

Lighthouse s'utilise dans le navigateur : outils de développement (F12), onglet *Lighthouse*,
« Analyser la page ». L'adresse doit être en `http://` — une page ouverte en `file://` n'est pas
auditable, et le résultat serait de toute façon faux : beaucoup de règles ne s'évaluent que sur une
page réellement servie.

## Ce que chacun voit, et ce qu'il ne verra jamais

| | html-validate | Lighthouse |
|---|---|---|
| Juge | le fichier que vous avez écrit | ce que le navigateur affiche |
| Voit | balises, attributs, hiérarchie, structure | rendu, contrastes mesurés, focus, performances |
| Ne voit pas | ce qui n'apparaît qu'à l'exécution | ce qui n'est pas à l'écran au moment du clic |

Cette dernière ligne est la plus importante du fichier. **Un audit ne juge que l'état affiché.**
Votre écran a quatre états : lancez l'audit quatre fois, un par état, sinon vous avez audité une
photo de l'état par défaut et vous l'appelez « l'écran ».

Et un rapport vert n'est pas un écran accessible. Ce que les deux capteurs réunis laissent passer,
vous le trouverez à la main : l'ordre de tabulation suit-il le sens de lecture, que dit un lecteur
d'écran de ce bouton, l'information est-elle portée par la couleur seule.

## Ce que vous gardez

Un capteur qui n'a pas servi à quelque chose n'a pas servi. Après chaque passe :

```
node node_modules/html-validate/bin/html-validate.mjs --version
```

Copiez la sortie dans `audits/`, dans un fichier nommé avec ce qu'elle auditait et la date —
`audits/2026-11-23-etat-vide.txt`, par exemple, avec le numéro de version en première ligne. C'est
ce qui vous permet, la semaine prochaine, de dire ce qui a changé et ce qui n'a pas bougé.

## Désactiver une règle

Le jeu « recommandé » est exigeant, et certaines de ses règles ne vous concernent pas. Dans
`.htmlvalidate.json`, ajoutez :

```json
{
  "extends": ["html-validate:recommended"],
  "rules": {
    "no-inline-style": "off"
  }
}
```

Copiez le **nom exact** depuis la ligne du rapport que vous voulez faire taire — ne le devinez
pas, une règle inconnue fait échouer le validateur. Et sachez ce que vous éteignez : désactiver une
règle doit être un choix écrit, pas un soulagement.
