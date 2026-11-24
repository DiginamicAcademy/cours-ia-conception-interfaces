<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/Logo-diginamic-color-blk.png">
    <img src="assets/Logo-diginamic-color.svg" alt="Diginamic Formation" width="358">
  </picture>
</p>

# Concevoir des interfaces avec l'IA : du besoin au prototype

**Deux journées pour apprendre à produire des écrans avec l'IA — et à savoir si ce qu'elle produit est juste.**

## L'idée qui tient tout le cours

> **Une interface générée par une machine n'est pas un livrable : c'est un brouillon de haute finition.**

Sa finition tient lieu de substance, et c'est ce qui la rend plus dangereuse qu'un croquis : un croquis ne persuade personne, une maquette bien typographiée persuade son auteur. Dans ces deux journées, vous n'apprenez pas un outil, vous apprenez à **rendre l'écran vérifiable** : écrire ce qui doit être vrai, le faire contrôler par la machine, itérer avec des preuves, puis transmettre en code.

## Objectifs pédagogiques

À l'issue du cours, vous saurez : rédiger une spec d'écran en trois blocs, vérifiable ; piloter un outil de génération d'écrans en surveillant ce qu'on lui donne et ce qu'il en fait ; compléter les quatre états d'un écran que personne ne dessine — vide, chargement, erreur, cas limites ; auditer l'accessibilité d'un rendu et mesurer l'effet d'une relance ; relier des écrans en prototype cliquable ; récupérer le code généré et le relire avant de dire « c'est bon » ; tenir la qualité d'une interface dans le temps avec deux capteurs gratuits.

## Prérequis

**Un compte Google à vous.** Le centre n'en fournit pas et l'outil de maquettage refuse les adresses qui ne sont pas sur `gmail.com` : prenez un compte personnel que vous pouvez ouvrir en salle, vérifié la veille.

**Node 22 sur le poste où vous travaillerez.** Le second jour, deux capteurs travaillent en ligne de commande et l'un des deux est écrit pour la branche 22 : `node -v` doit répondre 22.22 ou plus, ou 24.8 ou plus dans la branche 24. Vous n'installez rien en salle — le kit de capteurs vous est distribué déjà installé — mais votre version de Node se relève à l'accueil : un poste plus ancien installe sans bruit, puis échoue sur une erreur qui ne dit rien de sa cause.

Bases du HTML et du CSS, bases de Git et de GitHub. C'est tout — aucune connaissance en design graphique n'est attendue. Aucun logiciel à installer en salle, aucune licence payante : deux outils gratuits suffisent, et les capteurs sont déjà dans le navigateur ou tiennent sur une ligne de commande.

## Chapitre par chapitre

On repart d'une fiche persona fournie — [Panier Local](B-Persona-Panier-Local.md), la plateforme de commande auprès de producteurs locaux — et on passe deux journées sur l'écran : de la spec au code, dans cet ordre.

| # | Chapitre | Jour | Repère | Ce qu'on y fait |
|---|---|---|---|---|
| 01 | Une maquette finie est un risque | 1 | 25 min | Juger un écran généré sans se laisser impressionner par sa finition |
| 02 | Écrire une spec d'écran | 1 | 45 min | Formuler la même demande en vague et en trois blocs, et comparer |
| 03 | L'écran par la machine | 1 | 45 min | Générer un écran en surveillant ce qu'on lui donne, ce qui en sort et ce qui ne vient pas |
| 04 | Les états et l'accès | 1 | 60 min | Les quatre états oubliés ; l'audit d'accessibilité, puis la relance mesurée |
| 05 | Le prototype qui devient du code | 2 | 45 min | Relier les écrans, télécharger le dossier, relire le code généré |
| 06 | Tenez l'écran | 2 | 40 min | Deux capteurs, la dette immédiate d'une interface générée, les traces |
| EX-07 | Atelier de synthèse | 2 | 60 min | La boucle entière refaite en binôme sur un second écran, de bout en bout ; rendu comme trace, non noté |
| A | Vocabulaire, outils et ressources | — | — | Tout le vocabulaire du cours, défini ici |
| B | Panier Local, le sujet d'étude | — | — | La fiche sur laquelle on travaille de bout en bout |

Les durées ci-dessus sont celles des documents : en salle, les ateliers se jouent et prennent plus de temps que leur énoncé.
