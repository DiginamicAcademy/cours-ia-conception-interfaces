[← Chapitre précédent](06-tenez-ecran.md) · [Sommaire](Readme.md) · [Chapitre suivant →](B-Persona-Panier-Local.md)

# A - Vocabulaire, outils et ressources

> Un mot que vous ne pouvez pas employer dans une phrase ne vous sert à rien, et une définition de
> dictionnaire ne vous a jamais évité de valider un écran faux. Cette annexe reprend donc les mots
> du cours tels qu'ils y sont utilisés, avec le geste qui les vérifie ; elle reprend aussi les deux
> outils, non pas comme une publicité, mais comme deux objets dont on vérifie la portée avant de
> s'appuyer dessus. Vous n'avez rien à aller chercher ailleurs : tout ce qu'un chapitre emploie se
> définit ici.

## Sommaire

- [I. Vocabulaire et acronymes](#i-vocabulaire-et-acronymes)
- [II. Les deux outils de la journée](#ii-les-deux-outils-de-la-journée)
- [III. Le pack accessibilité](#iii-le-pack-accessibilité)
- [IV. La relecture d'un écran, en quatre axes](#iv-la-relecture-dun-écran-en-quatre-axes)
- [Aller plus loin](#aller-plus-loin)
- [Points clés](#points-clés)

## I. Vocabulaire et acronymes

Deux règles de lecture. D'abord, un sigle se développe une fois pour toutes ici, puis s'emploie
sans précaution dans les chapitres. Ensuite, une entrée qui ne change rien à la façon de vérifier un
écran n'a pas sa place dans cette annexe : les mots sont là pour demander une correction précise, pas
pour briller dans un compte rendu.

### A. Sigles et noms

| Sigle ou nom | Développement | Ce que c'est, dans cette journée |
|---|---|---|
| IA | intelligence artificielle | Le générateur : il ne devine pas, il **remplit**, avec ce qu'il a le plus vu. |
| HTML | HyperText Markup Language | La structure de l'écran. Elle se valide, donc elle se contrôle. |
| CSS | Cascading Style Sheets | La présentation : couleurs, tailles, espacements. C'est là que vivent les contrastes et les valeurs qui dérivent. |
| Tailwind | — (bibliothèque de classes utilitaires CSS) | Ce que les exports écrivent le plus souvent : des utilitaires dans le HTML, donc des valeurs à relire à la source. |
| JSON | JavaScript Object Notation | Format de données en texte. Dans un dossier généré, c'est le fichier de métadonnées de l'outil et celui des dépendances. |
| JSX | JavaScript XML | La syntaxe dans laquelle sont écrits les composants React. Un greffon d'accessibilité écrit pour du JSX ne dit rien du HTML que vous récupérez. |
| ZIP | — (format d'archive) | Ce que l'outil vous donne au téléchargement. Une archive n'est pas un projet tant que vous ne l'avez pas ouverte et relue. |
| API | Application Programming Interface | La porte par laquelle le code appelle un modèle. Elle se paie en clé, et une clé ne voyage pas dans le code du client. |
| HTTP | HyperText Transfer Protocol | Le protocole d'une page servie. Un rapport d'audit lancé en `file://` n'est pas lancé sur la page réelle. |
| PDF | Portable Document Format | Le format sous lequel vous recevez ce support : une adresse y reste une adresse, notez-la plutôt que de la chercher en ligne. |
| ASCII | American Standard Code for Information Interchange | Le croquis en caractères simples, dans le fichier de spec : quatre boîtes qui vivent au même endroit que la demande. |
| RNCP | Répertoire national des certifications professionnelles | Le répertoire des titres professionnels. Ce cours s'appuie sur deux d'entre eux. |
| CDA | Concepteur développeur d'applications (RNCP37873) | L'un des deux titres du cours : il nomme les maquettes, leur enchaînement et le RGAA. |
| DWWM | Développeur web et web mobile (RNCP37674) | L'autre : il nomme la réalisation des maquettes et la modélisation de leur enchaînement. |
| RGAA | Référentiel général d'amélioration de l'accessibilité | Le référentiel opposable en France, publié par la DINUM. Sa version en vigueur au 23/11/2026 est la 4.1.2. |
| WCAG | Web Content Accessibility Guidelines | Les règles d'accessibilité publiées par le W3C. Version 2.2 : le référentiel international, et la référence des outils d'audit. |
| AA | — (niveau de conformance WCAG) | Le niveau que les référentiels visent en pratique : le RGAA reprend les critères des niveaux A et AA. |
| W3C | World Wide Web Consortium | L'organisation qui publie WCAG et les recommandations HTML et CSS. |
| DINUM | direction interministérielle du numérique | L'administration qui publie le RGAA et sa méthode de test, critère par critère. |
| Git | — (outil de gestion de versions) | Ce qui transforme un dossier en historique relisible : qui a écrit quoi, à quelle date. |
| GitHub | — (hébergeur de dépôts Git) | Où vit le dépôt, et où les traces deviennent consultables par quelqu'un d'autre que vous. |
| npm | Node Package Manager | Le gestionnaire de paquets de Node, et le registre où l'on compare des capteurs avant de les choisir. |
| Node | — (environnement d'exécution JavaScript) | Ce qui fait tourner les capteurs en ligne de commande. Sa version se relève, elle ne se suppose pas. |
| DevTools | Developer Tools | Les outils de développement du navigateur (`F12`, ou clic droit puis Inspecter) : Lighthouse y habite, les tailles de cible s'y lisent. |
| Lighthouse | — | Le capteur qui juge le **rendu réel**, déjà dans les DevTools : aucune installation. |
| html-validate | — | Le capteur qui juge le **fichier**, et qui répond `fichier:ligne:colonne`. |
| axe-core | — | Le moteur d'accessibilité sous le capot de plusieurs capteurs : les cumuler ne fait pas voir plus. |
| Mermaid | — | La notation qui écrit un diagramme en texte dans le chapitre, et le rend à la compilation du PDF. |

### B. Les mots du cours

- **Brouillon de haute finition** — ce qu'est une interface générée : prête à montrer, rien de vérifié. Sa finition tient lieu de substance, et c'est ce qui la rend plus dangereuse qu'un croquis.
- **Rendre l'écran vérifiable** — le geste qui occupe toute la journée : écrire ce qui doit être vrai, le faire contrôler, itérer avec des preuves, transmettre en code.
- **Spec (d'écran)** — la demande écrite en trois blocs, versionnée dans le dépôt, qui dit aussi ce qui n'est pas demandé. Une spec n'est pas un message.
- **Triptyque** — les trois blocs d'une spec : surface produit, contexte d'usage, contraintes et goût. Un bloc absent ne simplifie pas l'écran, il laisse une décision orpheline.
- **Surface produit** — ce qui est à l'écran : données, provenance, actions, ordre de lecture.
- **Contexte d'usage** — qui l'utilise, sur quel matériel, dans quelle situation, pour venir faire quoi en premier.
- **Contraintes et goût** — les interdits durs (technique, référentiel, composants déjà là) et les références de style, datées et nommées.
- **Critère d'acceptation** — une condition vérifiable qui doit être vraie pour que l'écran passe. Cinq familles : données affichées, actions possibles, responsive, états, ce qui a été inventé.
- **Définition de fini** — la liste de ce qui doit être vrai pour dire « c'est bon » sans avoir à le plaider. Sa meilleure forme est une commande qui rend zéro erreur.
- **Fidélité** — à quel point un objet *ressemble* à la chose finale. Elle ne dit rien de sa justesse : chaque niveau de fidélité répond à une question, et à aucune autre.
- **Croquis** — le premier niveau de fidélité : l'ordre et le nombre, quitte à le jeter sans que personne moufte. Le coût d'abandon est le vrai sujet.
- **Maquette** — l'écran léché statique. Elle déplace la conversation sur la finition, et le fond disparaît sous sa présentation.
- **Prototype cliquable** — l'écran relié aux autres. C'est le seul cran qui réponde à « est-ce le bon chemin ? ».
- **Enchaînement** — le mot du référentiel pour relier les écrans. Ce n'est pas un réglage d'outil, c'est une décision, et elle engage l'accessibilité.
- **Handoff** — la transmission à l'équipe de développement. Le mot dit « passer par-dessus » : c'est le contresens à éviter, on ne balance pas une archive.
- **Synchro** — la pratique continue qui remplace l'envoi unique : un lien ouvert dans les deux sens, que l'on entretient.
- **Design system** — les règles de style du produit : valeurs, composants, interdits. Sans lui, la machine invente une charte par écran.
- **`DESIGN.md`** — le design system réduit à un fichier de règles dures, relu avant chaque demande. La dette immédiate est l'écart entre ce qu'il dit et ce que le CSS contient.
- **État (d'un écran)** — une façon dont l'écran se présente : vide, chargement, erreur, cas limites, plus le contenu normal. Une maquette n'en montre jamais qu'un.
- **État par défaut** — le cas favorable, celui où tout marche et où les données sont là. C'est le seul que la machine propose sans qu'on le lui demande, parce que c'est le plus représenté dans ce qu'elle a vu.
- **État vide** — rien à afficher : il doit dire quoi faire, pas seulement qu'il n'y a rien.
- **État de chargement** — pas encore affiché : il rassure, et il empêche de cliquer deux fois.
- **État d'erreur** — impossible à afficher : ce qui a échoué, pourquoi, que faire, et une action de sortie.
- **Cas limite** — la donnée réelle qui arrive mal : libellé à rallonge, montant plus long que sa colonne, image absente, un seul résultat, liste interminable.
- **Machine à états** — ce que vous codez déjà, et ce que la maquette ne fait pas semblant d'être : le blanc d'un écran est une transition non décrite.
- **Capteur** — une vérification hors de vous qui rend un verdict **rejouable**. Un capteur qui ne trouve rien n'a pas prouvé qu'il n'y a rien, il a épuisé ce qu'il sait voir.
- **Relance** — la seconde demande, conduite item par item à partir du rapport. Elle change le résultat mesuré, et ce n'est pas une politesse.
- **Seconde passe** — l'audit relancé après la relance. C'est elle qui décide, pas la réponse de l'outil.
- **Dette immédiate** — la dette déjà là à la sortie de la machine, avant votre première retouche : valeurs qui dérivent, composants dupliqués, fonctionnalités fantaisie.
- **Jeton de style (design token)** — une valeur de couleur, d'espacement ou de typographie **nommée** et réutilisée. Écrite en dur, elle ne survivra pas au passage en code.
- **Échelle d'espacement** — le rythme régulier des espaces, une valeur et non trois : c'est ce qui fait groupement.
- **Hiérarchie visuelle** — l'ordre de lecture rendu visible : ce qui est premier, ce qui va ensemble, ce qui est secondaire.
- **Fonctionnalité fantaisie** — le bouton « Favoris » qui ne met rien en favori. HTML valide, CSS propre, deux capteurs muets : l'écran est muettement faux.
- **Donnée de démonstration** — les produits que vous n'avez jamais listés. Sans relecture, elle voyage jusqu'en production.
- **Artefact** — un objet concret donné à la machine à la place d'un adjectif : un croquis, une capture datée, l'écran qui existe déjà.
- **Dater, épingler, garder les sorties** — ce qui survit à l'outil. Une maquette qui n'existe que chez l'éditeur n'est pas à vous, elle est empruntée.

### C. Les mots de l'accessibilité

- **Barrière d'accessibilité** — ce qui empêche quelqu'un d'utiliser l'écran. Ce n'est pas une question d'opinion : la plupart se mesurent.
- **Audit** — la recherche systématique de ces barrières, soit automatique (un rapport), soit manuelle (le clavier, la voix, les quatre états). Les deux sont nécessaires, aucun ne remplace l'autre.
- **Nom accessible** — ce qu'un lecteur d'écran annonce pour un élément. Le `placeholder` n'en est pas un : il disparaît dès la saisie.
- **Lecteur d'écran** — le logiciel qui annonce le nom, le rôle et l'état de ce qui reçoit le focus. Il entend ce qu'un rapport ne verra jamais.
- **Focus** — l'élément qui reçoit la saisie. S'il est invisible, personne ne sait où il est, y compris vous au clavier.
- **Focus visible** — le style qui montre où l'on est. Un focus retiré par esthétique (`outline: none`) est un des défauts les plus fréquents des exports.
- **Tabulation, ordre de tabulation** — le parcours au clavier de touche en touche. Un ordre valide peut être illogique : seul un humain le juge.
- **Cible tactile** — la surface réellement cliquable d'un élément, à distinguer de l'icône dessinée : l'icône peut être belle et la cible minuscule.
- **Ratio de contraste** — le rapport mesuré entre un texte et son fond. Il se lit dans un rapport, il se recalcule pour les gris que la finition a laissés passer.
- **Gros texte** — le texte assez grand et assez gras pour que le seuil de contraste s'assouplisse. La frontière est définie dans le critère : allez la lire une fois plutôt que de l'estimer.
- **Hiérarchie des titres** — un seul titre de niveau 1, aucun niveau sauté, de vrais titres et non des paragraphes gras. C'est le plan de lecture de celui qui ne voit pas l'écran.
- **Alternative textuelle** — la description d'une image pour qui ne la voit pas. Présente et fausse (`alt="image"`) satisfait le contrôle et trahit l'usage.

### D. Les mots du code et de l'atelier

- **Dépôt** — le dossier versionné. C'est lui qui garde les spec, les exports, les sorties de capteurs et les décisions.
- **Commit** — une trace datée d'un état. Gardez un commit pour la sortie de la machine, un commit pour vos corrections : le `git diff` entre les deux est votre travail réel.
- **Branche** — le chantier parallèle, et l'endroit où une relecture peut exister avant que le code compte.
- **`package.json`** — le fichier de dépendances et de scripts. C'est lui qui fait « projet » : lisez-le avant tout le reste.
- **`node_modules`** — le dossier des dépendances installées. Dans l'atelier, on ne l'installe pas : on l'extrait.
- **Serveur local** — ce qui sert la page en HTTP sur votre poste. Sans lui, une partie des ressources manque et le rapport est faux.
- **Clé (API)** — le droit d'appeler un modèle. Elle reste du côté de l'outil : un appel qui marche dans l'outil ne marche pas chez vous, et une clé recopiée dans le code du client est une clé compromise.
- **Linter** — le capteur de forme du code. Son équivalent pour l'écran, c'est ce que la journée vous fait installer.
- **Tests, typage, intégration continue** — les capteurs que vous appliquez déjà au code. La journée déplace le même geste sur l'objet écran.
- **Composant** — un morceau d'écran réutilisable, nommé par le mot du métier. Si tout est dans l'écran racine, vous avez une page, pas une application.
- **Arborescence** — l'arbre des fichiers reçus. L'annoter est la première relecture, et la seule qui ne dépende d'aucune machine.

## II. Les deux outils de la journée

La journée tient dans deux outils, et c'est un choix de méthode : chaque logiciel appris est une heure
volée à la vérification, et l'on ne change de logiciel qu'une seule fois, entre la maquette et le code.
Les deux appartiennent au même éditeur, ce qui évite d'avoir à négocier un format d'échange.

Cette fiche ne donne **ni quotas, ni noms de formules, ni tarifs** : ces éléments bougent plus vite
qu'un support écrit, et un chapitre qui les recopie est faux dans un trimestre. Elle donne ce qu'on
demande à chaque outil, ce qui en sort réellement, et les gestes de vérification. Un libellé
d'interface bouge plus vite qu'un geste : **tout ce que cette fiche nomme est relevé du 23/11/2026**,
et rien de sa terminologie ne vaut au-delà de cette date. Notez la vôtre quand vous reprendrez le
dossier : c'est ce qui la rendra encore utilisable dans un an.

### A. Google Stitch — de l'intention à la maquette

- **Ce qu'on lui demande.** Une entrée : le besoin, la demande écrite, un croquis. Une sortie : des écrans, des variantes, un prototype cliquable, et une archive de code.
- **Ce qui en sort, concrètement.** Par écran, un document HTML avec ses styles Tailwind et une capture, dans une archive `.zip`. C'est complet **pour l'outil**, pas pour le projet.
- **Ce qu'il ne rend pas.** Pas de serveur, pas de dépendances, pas de données réelles, pas de persistance, pas de validation de saisie. Les liens entre écrans qui marchent dans l'outil ne sont pas encore du code de navigation. Les états que vous n'avez pas demandés n'existent pas, et le responsive ajusté à l'œil pour la capture ne se reproduit pas.
- **Ce qu'il fait de votre côté, sans que vous le voyiez.** Il remplit les blancs avec ses hypothèses, et il écrit les valeurs que vous nommez rarement : la dette immédiate naît ici.
- **État du produit.** L'application est **déclarée en bêta** par son éditeur, sans engagement de disponibilité ni de continuité. Un produit en bêta peut changer de nom, remanier ses règles, retirer une fonction, ou fermer. Ce n'est pas un risque théorique, c'est son statut : travaillez comme si vous l'aviez emprunté.
- **Un point de compte, le plus gênant.** Un accès ouvert avec une adresse autre qu'une adresse gmail.com peut être **refusé**, et un compte d'entreprise peut **ne pas charger l'application**. Vérifiez avec le compte exact que vous utiliserez en séance, la veille — pas avec celui que vous avez sous la main.
- **Ce que vous y tapez.** Ouvrez la page de politique de données de l'outil **avant la séance et lisez-la vous-même** : c'est elle qui dit ce que deviennent ce que vous écrivez et ce que vous envoyez. Tant que vous ne l'avez pas lue, n'y mettez ni nom de client réel, ni donnée nominative, ni clé, ni code qui ne vous appartient pas.

### B. Google AI Studio — du prototype au code

- **Ce qu'on lui demande.** Reprendre ce que la maquette a produit et en faire une application qui se clique réellement, téléchargeable en `.zip`, avec une synchronisation possible vers un dépôt Git. Dans l'interface, demandez le **mode Build** : celui qui produit une application, pas une image d'écran. Un libellé de menu n'est pas une fonction : si celui-ci a bougé, cherchez ce qui **fait projet** et non ce qui fait bel objet.
- **Ce qui en sort, concrètement.** Un projet : une entrée HTML, un dossier de code source, un fichier de dépendances et de scripts, un petit serveur, et un fichier de métadonnées que l'outil gardait pour lui.
- **Ce qu'il ne rend pas.** Pas vos décisions, pas vos données, pas vos clés : les appels qui ont besoin d'une clé restent chez l'éditeur. Ces appels ne fonctionneront donc pas en local — ce n'est pas un défaut du dossier, c'est le coffre qui est resté de l'autre côté. En revanche, rien n'est garanti sur ce qui rend l'écran accessible, sur les états, ni sur les valeurs de style nommées : vous les redemandez, ou vous les écrivez.
- **Le point de l'après-midi.** Les ressources gratuites d'un compte peuvent être **épuisées avant la fin de la séance**, et leur remise à zéro ne suit pas votre horloge — elle dépend du fuseau de l'éditeur. Aucun chiffre ne sera écrit ici, parce qu'il serait faux à la prochaine relecture. Le geste, lui, ne bouge pas : on relève l'état du compte de chaque binôme à l'entrée de l'après-midi, et l'on arrange la séance d'après ce qu'on a lu, pas d'après ce qu'on espère.
- **Ce que vous en faites.** Un dossier se relit avec vos yeux de développeur, hors de l'outil : arborescence annotée, fichier de dépendances et de scripts lu en premier, trois questions à poser aux fichiers (quels composants, d'où viennent les données, où sont les états). Ce qui n'a pas été relu n'est pas récupéré, seulement reçu.

### C. Les trois vérifications, avant de compter sur un outil

Elles ne sont pas propres à un outil. Elles valent pour n'importe quel service en ligne qui produit du
travail à votre place, y compris celui que vous découvrirez l'année prochaine.

- **Vérifier ce qui reste disponible.** La veille : connectez-vous avec le compte du jour, relevez ce que ce compte permet, notez-le et datez-le. Ce qui est ouvert pour un collègue ne l'est pas pour vous, et ce qui l'était en septembre ne l'est plus en novembre. Un droit d'usage énoncé par un support est faux dans un mois ; un geste daté reste utile.
- **Vérifier où vont ce qu'on tape.** Lisez la politique de données vous-même, avec la date de lecture ; puis posez la règle : ce qui entre dans l'outil est du faux, du générique, du déjà public. Ce qui est réel, nominatif ou confidentiel reste dehors.
- **Vérifier ce que l'export contient réellement.** Ouvrez l'archive, ailleurs que dans le dossier de téléchargement ; cherchez **ce qui fait projet** — un fichier qui déclare dépendances et scripts, un dossier de code source — et non ce qui fait bel objet ; lancez ce que le fichier de scripts déclare, et si l'installation échoue (réseau, version de l'environnement), ouvrez le fichier d'entrée directement : vous venez de mesurer ce qui dépendait du serveur ajouté par l'outil.
- **Et le geste qui survit à tout.** Datez chaque production (nom de fichier, commit, déclaration), épinglez ce qui tourne sur votre machine (le kit livré et le fichier de dépendances le font pour vous), et gardez les sorties dans le dépôt. Ce qui ne survivrait pas à la disparition de l'outil doit être chez vous.

## III. Le pack accessibilité

Une fiche à garder après la journée : les seuils avec leur critère, ce qu'aucun outil ne vérifie à
votre place, et la façon de formuler une relance qui produise un correctif. Elle reprend le chapitre
04 et se lit sans lui.

### A. Les seuils, et le geste qui les vérifie

Un seuil sans geste n'est pas une vérification, c'est une opinion chiffrée. Ces valeurs sont des
normes, pas des statistiques : elles viennent d'un référentiel nommé, avec sa version.

| Ce qu'on vérifie | Le seuil | Le critère | Le geste qui vérifie |
|---|---|---|---|
| Contraste d'un **texte courant** | 4,5:1 | WCAG 2.2, critère 1.4.3 (niveau AA) | Lire le ratio mesuré et le ratio attendu dans le rapport d'audit, puis recalculer le gris pâle que la finition a laissé passer. |
| Contraste d'un **gros texte** | 3:1 | WCAG 2.2, critère 1.4.3 (niveau AA) | Idem. La frontière de ce qui compte comme « gros » est dans le critère : on la lit, on ne l'estime pas. |
| **Cible tactile** | 24×24 pixels CSS minimum | WCAG 2.2, critère 2.5.8 (niveau AA) | Sélectionner l'élément dans les outils de développement et lire la taille **rendue**, pas la taille dessinée. |

Deux choses à savoir sur ces lignes.

- La **taille minimale de cible tactile est une nouveauté de WCAG 2.2** : elle n'existe pas dans WCAG 2.1. C'est la raison pour laquelle on cite la version du référentiel à chaque fois — et celle pour laquelle un capteur calé sur la version précédente ne signalera rien du tout sur une cible minuscule.
- Le RGAA **reprend ces exigences** dans ses propres critères, avec sa numérotation. Cette fiche n'apparie aucun numéro RGAA avec un numéro WCAG : quand un audit ou un rapport cite un critère, on relève le numéro dans le référentiel du jour, on ne le recopie d'aucun support.

### B. Ce qu'aucun outil ne fait à votre place

Les vérifications ci-dessous tiennent en quelques minutes par écran, et produisent ce qu'aucun rapport
ne contiendra jamais.

- **Tabuler toute la page sans souris.** Atteignez-vous chaque action, voyez-vous où vous êtes, l'ordre est-il celui de la lecture, pouvez-vous refermer ce que vous avez ouvert (`Échap`) ?
- **Afficher les quatre états et auditer chacun.** Un rapport n'audite que le document courant, dans l'état courant : l'écran vide reste inconnu de la machine tant que vous ne l'affichez pas.
- **Lire les messages à voix haute.** « Une erreur est survenue » est bien contrasté, bien balisé, bien annoncé, et parfaitement muet : il ne dit ni ce qui a échoué ni que faire.
- **Écouter le nom des champs.** Un nom techniquement conforme peut être inutilisable : « Sélectionnez une option » sur un champ de quantité est un nom, pas une information.
- **Juger l'ordre, pas seulement sa validité.** Un ordre de tabulation conforme peut mener à « valider » avant « choisir la quantité ». Seul un humain sait ce qui devrait venir après.
- **Faire entrer la donnée laide.** Le libellé de producteur à rallonge, le montant avec ses décimales, l'image absente, la liste qui n'en finit pas.
- **Chasser la couleur seule porteuse d'un sens.** Si l'état « rupture » ne tient qu'à une pastille rouge, l'information n'existe pas pour tout le monde.
- **Regarder l'écran à la largeur étroite visée par votre spec, avec vos données.** Ce qui chevauche son voisin à cette largeur ne s'est jamais vu dans la capture de démonstration.

### C. Formuler la relance qui produit un correctif

À « améliore l'accessibilité », la machine répond à sa manière : elle revient avec sa version préférée
de l'écran, et vous avez tout à rejuger. À une liste de violations, elle répond sur un terrain où elle
est bonne : appliquer des correctifs locaux.

- **Une liste numérotée**, un item = une violation relevée par l'audit ou par votre relecture.
- **L'écart mesuré et ce qu'exige le référentiel**, dans le même item : « le texte est trop pâle sur son fond et échoue au contraste, il faut 4,5:1 en texte courant (WCAG 2.2, critère 1.4.3) ».
- **La correction attendue, écrite comme vous l'auriez faite** : « ajoute un `<label>` associé, libellé « Quantité » », et non « corrige le champ ».
- **Le périmètre figé** : « ne modifie ni la mise en page, ni les textes, ni les données ».
- **Et l'on ne demande pas « as-tu tout corrigé ? »** : on relance l'audit. C'est la seconde passe, et c'est elle qui décide.

Ce que la relance ne garantit pas, et qu'il faut donc assumer : une sortie sémantiquement valide n'est
pas un écran accessible ; la machine peut annoncer une correction qu'elle n'a pas faite ; un rapport à
zéro item laisse entières les barrières invisibles ; et le contenu d'un message d'erreur reste votre
affaire, balisé ou non.

### D. Où lire, et avec quelle version

- **Le RGAA 4.1.2**, en vigueur au 23/11/2026 : arrêté du 18 décembre 2024, 106 critères, 258 tests, adossé au WCAG version 2.1, niveaux A et AA. Publié par la DINUM avec sa méthode de test, critère par critère : [accessibilite.numerique.gouv.fr](https://accessibilite.numerique.gouv.fr/), et la liste des critères et des tests sur [accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/).
- **WCAG 2.2**, le référentiel international et celui des outils d'audit : [w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/), avec une vue filtrable par niveau et par thème sur [w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/) — pratique pour retrouver 1.4.3 et 2.5.8 et lire le *test*, pas seulement la règle.
- **La v5 du RGAA est en rédaction**, avec une publication annoncée pour fin 2026. À ce stade, c'est tout ce que l'on peut en dire : on audite avec la version en vigueur, on la nomme, on la date, et on ne l'anticipe pas dans un rapport.
- **La règle qui tient par-dessus les versions** : un référentiel se cite avec sa version et une date de relevé. Ce qui a changé entre la 2.1 et la 2.2, ou ce qui changera avec la v5, se lit dans le référentiel, pas dans un support de cours.

> ⚠️ **Un rapport vert n'est pas un écran accessible.** Les outils automatiques laissent passer
> environ **30 % des barrières d'accessibilité** : donnée du Government Digital Service, le service
> britannique chargé des services publics numériques, reprise dans la documentation de l'outil de
> test `jest-axe`. Un capteur qui ne trouve rien n'a pas prouvé qu'il n'y a rien — il a épuisé ce qu'il
> sait voir. Après le vert, on tabule encore.

## IV. La relecture d'un écran, en quatre axes

Quatre axes, une question par axe, et l'endroit du cours où se trouve la façon d'y répondre. Cette
check-list ne redonne rien, elle renvoie : un même fait ne s'écrit pas deux fois. Elle se remplit **le
dossier ouvert et le rendu lancé**, parce que les quatre questions portent sur ce que les fichiers
disent et sur ce que l'écran fait — une capture n'en dit pas un mot. Elle se relit cinq minutes avant
de dire « c'est bon », et ses quatre réponses, courtes, se gardent dans le dépôt avec les sorties des
capteurs (chapitre 06, IV. Déclarer l'usage, tenir les traces).

- **Les composants.** Y a-t-il un fichier par écran et un fichier par morceau réutilisé, nommé par le mot du métier — ou tout tient dans l'écran racine, et le même morceau existe en trois copies qui ne diffèrent que par une classe ?
  *Sur quoi on s'appuie :* chapitre 05, III.D (Trois questions à poser aux fichiers) et III.E (Ce qui cloche typiquement dans du code généré) ; chapitre 06, III (La dette immédiate d'une interface générée), pour les copies.
- **Les données.** Chaque valeur affichée vient-elle d'un état ou d'un appel, ou est-elle écrite en dur dans le fichier — et si elle l'est, qu'est-ce qui voyage jusqu'en production avec elle ?
  *Sur quoi on s'appuie :* chapitre 05, III.D ; chapitre 06, III, pour la donnée de démonstration et la fonctionnalité fantaisie ; chapitre 02, IV (Les critères d'acceptation d'un écran), pour ce que la spec devait en avoir dit.
- **Les états.** Le chargement, le vide, l'erreur et les cas limites sont-ils écrits quelque part dans le dossier, et les avez-vous obtenus à l'écran — ou le dossier ne décrit-il que le cas favorable ?
  *Sur quoi on s'appuie :* chapitre 04, I (Un écran n'est pas un écran, c'est quatre, et la condition de fini qui le clôt) ; chapitre 05, III.D encore, et V (Ce qui survit, ce qui meurt), pour ce qui a fait le voyage depuis la maquette.
- **L'accès.** Les six points mesurables sont-ils tenus **dans le code** — un nom porté par un `<label>` et non par un `placeholder`, un `<button>` et non une `<div>` cliquable, un focus laissé visible — ou seulement dessinés ; et, l'audit ayant été lu item par item, qu'est-ce qui n'y figure toujours pas ?
  *Sur quoi on s'appuie :* chapitre 04, III.B (Six points qui se vérifient) et IV.C (Ce qu'il ne trouvera jamais) ; § III.B de cette annexe pour ce qu'aucun outil ne fait à votre place, § III.C pour la façon de le faire corriger.

## Aller plus loin

> Facultatif, sans rapport avec la note de la journée.

- **Lire les deux critères cités dans leur source.** Ouvrez 1.4.3 et 2.5.8 dans WCAG 2.2, puis cherchez leurs équivalents dans les critères du RGAA 4.1.2. L'appairage se fait une fois, à la main, et ne se recopie pas : c'est le seul moyen de savoir de quoi vous parlez quand un rapport cite un numéro.
- **Tenir un fichier `OUTILS.md` dans vos dépôts.** Une ligne par produit utilisé : l'outil, la date du relevé, ce que le compte autorisait ce jour-là, ce que l'archive contenait. Dans un an, ce fichier remplacera avantageusement le souvenir de quelqu'un.
- **Annoncer avant de coder.** Écrivez le nom accessible que vous attendez pour chaque champ *avant* de regarder ce que la machine a mis, puis écoutez la différence au lecteur d'écran. C'est quelques minutes, et c'est la fin des débats sur « c'est accessible ».
- **Comparer avec un outil où le CSS reste visible.** Certains outils de maquette montrent en continu les styles que la machine écrit pendant que vous posez un calque (la note de lecture du chapitre 05 en nomme un). À regarder un soir, pour la culture : ce que la machine écrit joliment reste à relire, où qu'on le regarde.

## Points clés

- Un sigle ne vaut que s'il se développe une fois puis s'emploie sans précaution ; un mot du cours ne vaut que par le geste de vérification qu'il attache.
- Les deux outils de la journée sont un maquettage et une application, chez le même éditeur : le premier rend une archive complète **pour lui**, le second un dossier qui se relit avec vos yeux.
- Ce qui reste disponible se vérifie, ça ne se suppose pas : le compte du jour, la veille ; ce qui est envoyé, avant d'y toucher ; ce que l'archive contient, avant de dire « c'est bon ».
- Trois seuils, trois critères nommés, trois gestes : 4,5:1 et 3:1 (WCAG 2.2, critère 1.4.3), 24×24 pixels CSS (WCAG 2.2, critère 2.5.8) — et la cible tactile n'existe qu'à partir de WCAG 2.2.
- **Un rapport vert n'est pas un écran accessible** : environ 30 % des barrières passent au travers des outils automatiques. Le clavier, la voix, les quatre états et la donnée laide restent votre partie.

---

[← Chapitre précédent](06-tenez-ecran.md) · [Sommaire](Readme.md) · [Chapitre suivant →](B-Persona-Panier-Local.md)
