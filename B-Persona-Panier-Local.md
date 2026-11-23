[← Annexe précédente](A-Vocabulaire-outils-et-ressources.md) · [Sommaire](Readme.md)

# B - Panier Local, le sujet d'étude

> Ceci n'est pas un modèle à recopier. C'est la matière : ce qu'est *Panier Local*, qui s'en sert,
> ce que sa base sait et ne sait pas, ce qu'il est interdit d'inventer, et ce qui devra être vrai
> pour que vous disiez « c'est bon ». Vous l'ouvrirez quatre fois dans la journée : pour écrire
> votre spec, compléter les états, relier les écrans, passer aux capteurs. Ce qu'elle ne dit pas
> exprès, c'est **ce que l'écran doit contenir** : c'est votre travail, et il tient en trois blocs.

## Sommaire

- [I. L'affaire](#i-laffaire)
- [II. Qui s'en sert](#ii-qui-sen-sert)
- [III. L'écran à concevoir](#iii-lécran-à-concevoir)
- [IV. Les données disponibles](#iv-les-données-disponibles)
- [V. Les contraintes](#v-les-contraintes)
- [VI. Le livrable de la journée, et quand il est fini](#vi-le-livrable-de-la-journée-et-quand-il-est-fini)

## I. L'affaire

Panier Local vend des paniers composés par des producteurs du département : on commande une
semaine, on retire le jeudi dans l'un des points de retrait convenus. L'affaire a commencé avec un
panier unique ; puis chaque producteur a voulu placer ses produits, et le catalogue est devenu une
liste de produits — c'est cette liste que l'écran de la journée doit permettre de traverser.

Trois personnes à la coordination, dont une seule passe son temps à saisir le catalogue ; une
grosse vingtaine de producteurs, qui l'envoient par courriel, en photo, en message vocal ou sur un
papier remis au point de retrait ; six points de retrait, tenus par des bénévoles.

Ce qui a déclenché la refonte n'est pas une ambition, c'est une usure. Les producteurs appellent
pour savoir si leurs produits sortent cette semaine, les clients appellent pour savoir s'il reste
du miel, et deux producteurs ont arrêté d'envoyer quoi que ce soit parce que personne ne les
voyait. La règle posée avant la prochaine réunion avec eux : la recherche doit tenir sur un écran
qui ne promet **rien que la base ne sache tenir**, avant toute discussion d'application mobile ou
de nouveau logo. Personne dans l'équipe ne fait du design, et personne ne reprendra à la main ce
qu'une machine aura produit.

## II. Qui s'en sert

Les trois personnes ci-dessous sont inventées, comme le catalogue de la section IV : elles sont le
sujet d'étude. Chacune apporte une contrainte différente, et chacune se traduit en quelque chose
que l'on peut **vérifier** sur un écran — pas en une intention.

### A. Nadia, achète pour deux

- **Ce qu'elle veut** : retrouver les produits qu'elle reprend chaque semaine sans relire la liste.
- **Ce qui la bloque** : elle ne distingue plus une ligne de la suivante, renonce avant d'avoir trouvé, et finit par reprendre le panier unique.
- **Sa contrainte, et ce qu'elle rend vérifiable** : elle travaille à l'agrandissement, l'affichage réglé pour lire de très près, et se déplace au clavier parce que le pointeur lui échappe — jamais de lecteur d'écran. Recherche, ouverture d'un résultat et panier doivent donc s'atteindre sans reprendre la souris, et le texte agrandi doit rester entier et à portée.

### B. Youssef, tient un point de retrait

- **Ce qu'il veut** : répondre en une minute à « vous avez encore des œufs ? » et noter les produits que quelqu'un réserve pour jeudi.
- **Ce qui la bloque** : il ne sait pas ce qui sort cette semaine ; il ouvre la liste, la fait défiler, et dit « je regarde jeudi sur place ».
- **Sa contrainte, et ce qu'elle rend vérifiable** : la tablette partagée du comptoir, posée à plat, debout, devant une file, souvent avec les gants de manutention aux mains — aucun pointeur, aucun pavé tactile. Aucune action ne peut dépendre du survol, d'un geste maintenu ou d'un glisser-déposer, et tout doit s'atteindre d'un seul appui sans viser petit.

### C. Awa, commande depuis sa remorque

- **Ce qu'elle veut** : passer sa commande une fois, d'une seule tenue, entre deux livraisons.
- **Ce qui la bloque** : elle lance la recherche, la page tourne, elle recharge, et ne sait plus si sa commande est partie ; elle rappelle le point de retrait.
- **Sa contrainte, et ce qu'elle rend vérifiable** : réseau bon sur le boulevard, faible au fond du marché, absent dans la remorque — elle travaille par coupures qui ne sont pas de sa faute. On doit savoir si l'écran attend encore la réponse ou s'il l'a perdue, et une nouvelle tentative ne doit pas lui faire tout saisir deux fois.

## III. L'écran à concevoir

L'écran de la journée est celui par lequel tout passe : **la recherche de produits, ses résultats,
et le panier**. Ce qui suit la validation de la commande n'est pas de la journée.

| Dans le champ | Hors champ |
| --- | --- |
| Ce que l'on tape, et ce que cela donne | Le paiement : moyens de paiement, frais de port, confirmation |
| La liste des résultats et ce que chaque ligne montre | Les comptes : inscription, connexion, adresses enregistrées |
| Ce qui restreint ou ordonne cette liste | La fiche produit détaillée, sa description, ses photos |
| Le panier : ce qu'il contient, ce qui le modifie, ce qui s'y affiche | L'espace producteur et la saisie du catalogue |
| Le panier accessible depuis la recherche, et ce que l'écran dit quand il n'a rien à montrer | Points de retrait, pages légales, conditions de vente, service client |

Deux précisions, parce que c'est la seule délimitation que la fiche impose :

- Vous découpez l'écran **en écrivant** où il s'arrête : cette ligne est une décision, elle s'écrit dans la spec et elle se relit.
- Trois objets au minimum devront se tenir par un clic avant la fin de la journée, dans les deux sens et au clavier (chapitre 05) : lesquels, et dans quel ordre, c'est votre décision.

## IV. Les données disponibles

Les champs du catalogue, tels qu'ils existent. La dernière colonne compte plus que la précédente :
c'est elle qui décide de ce que l'écran peut afficher sans mentir.

| Champ | Ce qu'il contient | Ce qu'il ne dit pas |
| --- | --- | --- |
| `produit` | le nom du produit, tel que le producteur l'a écrit | ni variante, ni taille, ni conditionnement : tout est dans le nom |
| `producteur` | la raison sociale telle qu'inscrite au catalogue | ni ville, ni adresse, ni distance, ni photo du producteur |
| `categorie` | une catégorie parmi quelques-unes ; peut être laissée vide | aucune sous-catégorie, aucun classement, aucun ordre entre catégories |
| `prix` | le prix saisi par le producteur, en euros ; peut être vide | ni remise, ni promotion, ni prix au kilo, ni prix « à partir de » |
| `unite` | l'unité de vente, en toutes lettres | aucune conversion : rien ne relie un pot de 250 g à un kilogramme |
| `dispo_du`, `dispo_au` | dates d'ouverture et de fermeture de la période de vente | aucune quantité : une période n'est pas un stock |

**Extrait de travail** — jeu de données de l'exercice. Ses valeurs sont inventées, la date de
référence aussi : elles ne correspondent pas à la session que vous suivez. Elles sont cohérentes
entre elles, et c'est pour cela que vous pouvez écrire une affirmation dessus et aller la vérifier
dans le bloc. Semaine de commande de référence : du lundi 30 novembre 2026 au dimanche 6 décembre.

```csv
produit;producteur;categorie;prix;unite;dispo_du;dispo_au
Miel de châtaignier;Rucher des Causses;épicerie;9,50;pot de 250 g;2026-09-15;2026-12-20
Pain d'épices au miel de châtaignier;Rucher des Causses;épicerie;6,80;sachet de 350 g;2026-11-02;2026-12-20
Confiture extra de châtaigne et vanille Bourbon de Madagascar, pot familial à partager;Rucher des Causses;épicerie;11,40;pot de 320 g;2026-10-01;2026-12-20
Œufs plein air, douzaine;Ferme du Haut Bois;crèmerie et œufs;4,20;la douzaine;2026-01-05;2026-12-31
Œufs plein air, douzaine;Earl du Val Ferrand;crèmerie et œufs;4,60;la douzaine;2026-01-05;2026-12-31
Pommes de terre Amandine;Earl du Val Ferrand;fruits et légumes;3,10;le sac de 5 kg;2026-08-20;2027-03-15
Noix fraîches décortiquées;Earl du Val Ferrand;fruits et légumes;;au kilogramme;2026-09-10;2026-11-22
Tomme de brebis, demi-affinée;Bergerie de la Combe Verte;fromages;14,90;la pièce d'environ 1,8 kg;2026-06-01;2027-02-28
Yaourts de brebis nature;Bergerie de la Combe Verte;crèmerie et œufs;3,40;barquette de 8 pots;2026-01-05;2026-12-31
Jus de pomme pétillant;Ferme du Haut Bois;;7,20;bouteille de 75 cl;2026-09-01;2027-01-31
```

**Ce que cet extrait permet de contrôler.** Ce sont des affirmations sur les données, pas sur
l'écran : une affirmation que vous ne pouvez pas trancher en regardant le fichier n'est pas une
assertion de contrôle.

- Dix lignes, quatre producteurs, quatre catégories renseignées et une ligne sans catégorie.
- Deux lignes portent le même nom de produit, chez deux producteurs, à deux prix différents : dire « le produit » sans dire « le producteur » ne désigne rien.
- Une ligne n'a pas de prix ; une autre est fermée à la vente depuis le 22 novembre, donc hors de la semaine de référence.
- Neuf unités de vente pour dix lignes, une seule revient deux fois : additionner deux prix sans convertir n'a pas de sens, sauf à le décider et à l'écrire.
- Le nom de produit le plus long compte plus du triple de caractères que le plus court.
- Deux pots de miel et une douzaine d'œufs de la Ferme du Haut Bois font 23,20 euros : c'est une valeur de contrôle, pas une valeur d'affichage.

**Ce que la base ne sait pas.** Ce n'est pas un trou à combler en silence, c'est une borne : une
ligne d'écran qui parle de l'une de ces choses est une ligne qui invente.

- Les quantités : rien n'est en stock, rien n'est épuisé, rien n'est « bientôt terminé ».
- Les avis, les notes, les favoris, les « meilleures ventes » — tout ce qui aurait été voté.
- Aucun classement interne : aucun score, aucune pertinence, aucune priorité enregistrée.
- Les promotions, remises, tarifs dégressifs, frais de port, délais et créneaux de livraison.
- Les visiteurs : pas de compte, pas d'historique, pas de panier retrouvé d'une visite à l'autre.
- Les visuels : aucune photo de produit, aucune image de producteur n'est fournie.
- La composition et les allergènes, qui relèvent de la fiche produit (hors champ, section III).
- La localisation : aucun producteur n'a de ville au catalogue, donc aucune distance à afficher.

## V. Les contraintes

Chacune de ces lignes ferme une porte, et se vérifie sur votre rendu sans discussion de goût.

| Contrainte | Ce qu'elle interdit d'inventer |
| --- | --- |
| Aucune quantité en stock au catalogue, seulement une période de vente par ligne. | « En stock », « épuisé », « plus que 3 », une jauge, un compte à rebours. |
| Le prix vient du producteur, avec son unité ; il peut être vide ; le poids d'une pièce est dit « environ ». | Un prix au kilo reconstitué, un « à partir de », un arrondi, une conversion d'unité, un total qui additionne deux unités différentes. |
| Il n'y a pas de compte, donc pas de visiteur reconnaissable. | « Votre panier reprenait », un historique, une liste d'envie, une commande retrouvée, un message adressé à quelqu'un. |
| Le paiement est hors champ ; ni port ni délais ne figurent dans aucune donnée. | Un tunnel de commande, un moyen de paiement, « livraison offerte dès », un créneau de retrait. |
| Rien dans le catalogue ne note, ne promeut ni ne classe. | « Les plus populaires », « tri par pertinence », un badge de promotion, un nombre d'avis. Si vous ajoutez un ordre, son critère devient une décision écrite. |
| Aucune image n'est fournie, et le nom du producteur s'affiche tel qu'inscrit au catalogue. | Une miniature, une galerie, un visuel produit, une image décorative qui en tiendrait lieu, une raison sociale abrégée, un sélecteur de langue. |
| L'écran se consulte au téléphone dehors comme au poste de l'atelier, et le pointeur n'existe pas partout. | Une action accessible seulement au survol, un glisser-déposer, une mise en page qui n'existerait qu'à une largeur. |
| Personne chez Panier Local ne reprendra le code généré à la main, et l'écran doit être présentable à la prochaine réunion avec les producteurs. | « On nettoiera après », un composant dont personne ne dit à quoi il sert, un élément inexpliquable à un producteur. |

## VI. Le livrable de la journée, et quand il est fini

Le livrable du binôme : une spec en trois blocs, un écran généré, ses quatre états, un rapport
d'audit d'accessibilité et la relance qui l'a corrigé, un prototype cliquable, le dossier de code.
Rien ci-dessous ne porte sur l'apparence.

Ce qui est écrit, avant le premier rendu :

- [ ] la spec tient dans un fichier versionné, en trois blocs, avec un croquis ou une référence ;
- [ ] la frontière de l'écran (section III) est écrite, avec la liste des écrans à relier ;
- [ ] chaque montant et chaque libellé est rattaché à un champ de la section IV, ou à la liste explicite de ce que vous avez décidé d'ajouter ;
- [ ] la liste de ce qui reste non décidé existe, et elle n'est pas vide.

Ce qui est vrai sur l'écran :

- [ ] les quatre états existent et se montrent sur demande : vide, chargement, erreur, cas limites — « je ne l'ai pas prévu » est une case non cochée, pas une réponse ;
- [ ] au moins une donnée affichée vient de l'extrait de la section IV, et vous la nommez ;
- [ ] rien n'affiche ce que la base ne sait pas (liste des absences, section IV) ;
- [ ] aucun montant affiché ne mélange deux unités de vente, et nulle part une quantité que personne ne connaît.

Ce qui est vérifié, et comment :

- [ ] au clavier seul, sans souris, vous allez de l'ouverture de l'écran au panier et vous en revenez — le trajet de Nadia, fait, pas supposé ;
- [ ] une recherche qui ne renvoie rien donne un écran où vous savez ce qui s'est passé ;
- [ ] l'audit d'accessibilité a été lancé deux fois, avant et après votre relance, valeurs mesurées reportées ; un rapport vide ne coche pas la case ;
- [ ] le rendu passe le validateur HTML sans erreur, et les contrôles écrits sur les données de la section IV sont passés ;
- [ ] le dossier de code s'ouvre en local, avec trois réponses citant des fichiers : quels composants, d'où viennent les données, où sont les états ;
- [ ] les traces sont là : un commit pour la demande, un pour la sortie, les captures datées, la version de l'outil notée.

Une dernière chose, qui ne se coche pas. Si tout ce qui précède est vrai et que l'écran reste
joli, vous n'avez pas échoué : la finition n'a jamais été le critère. Elle est seulement ce qui
vous a empêché de voir, au chapitre 01, que rien n'était vérifié.

[← Annexe précédente](A-Vocabulaire-outils-et-ressources.md) · [Sommaire](Readme.md)
