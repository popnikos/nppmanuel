---
layout: default
title: Zone d'édition
---
# Zone d'édition

[Préférences](preferences.md) du comportement de certaines fonctionnalités relatives à l'édition dans [Notepad++](notepad++.md).

![Interface](/images/preferences/02_editing.png)

## Curseur

Largeur et vitesse de clignotement du curseur d'édition.

![Largeurs possibles du curseur d'édition](/images/preferences/npp_cursor_width.png)

- *Largeur* : largeur du curseur d'édition.
  - `0` : curseur invisible.
  - `1` : curseur large de 1 pixel (par défaut).
  - `2` : curseur large de 2 pixels.
  - `3` : curseur large de 3 pixels.
  - `Block` : curseur large d'un caractère (type ligne de commande).
  - *Cligotement* : vitesse de clignotement du curseur. De rapide (`R`, cinq clignotements par seconde) à lent (`L`, un clignotement toute les quatre secondes). Placer le curseur entièrement à droite pour stopper le clignotement.

## Multiédition

![Curseur démultiplié au moyen de la multi-édition](/images/preferences/npp_multiedition_1.png)

Cette option permet d'activer l'édition simultanée d'emplacements différents dans un fichier, fonctionnalité désactivée par défaut. Il s'agit d'une option à activer sans hésiter tant son intérêt est grand et décuple les possibilités de Notepad++.

![Écriture à plusieurs endroit simultanément au moyen de la la multi-édition](/images/preferences/npp_multiedition_3.png)

Il vous est alors possible de faire des sélections ou de positionner le curseur à autant d'emplacements que voulus en utilisant la touche `Ctrl` au moment de votre nouveau clic.

Une fois le curseur multiplié vous pouvez écrire, effacer, couper, copier, coller, etc... depuis tous ces endroits à la fois. Les parties copiées seront mises bout à bout lorsque vous les collerez.

## Contrôle de repli de bloc

Lorsque vous programmez, Notepad++ vous indique et vous permet de replier les blocs d'instructions en affichant des repères dans la "barre de blocs" verticale située à gauche du texte. Ces options vous permettent d'en choisir le style.

![Indicateurs de blocs possibles](/images/preferences/npp_folding_icons.png)

- *Simple* : affiche un signe "-" ou "+" en début de bloc.
- *Flèche* : affiche une flèche orientée en début de bloc.
- *Cercle* : indique le début d'un bloc dans un cercle, relié par une ligne arrondie à la fin du bloc.
- *Carré* : indique le début d'un bloc dans un carré, relié par une ligne brisée à la fin du bloc (par défaut).
- *Aucun* : cache la "barre de blocs". Il n'est plus possible de plier les blocs de cette manière.

## Largeur des lignes

Cette option permet d'afficher un repère de marge. Indispensable aux programmeurs respectueux des standards, elle permet d'indiquer la limite des 80 caractères de large à essayer de ne pas dépasser.

- *Afficher la marge droite* : active l'indication de largeur de ligne.
  - *Afficher un filet vertical* : affiche une ligne turquoise à la colonne donnée.
  - *Colorer l'arrière plan* : colore le fond du texte jusqu'à la colonne donnée.
  - *Nombre de colonnes* : emplacement du repère.

## Line Wrap

Si vous vous rendez dans les *Préférences*, onglet *Zones d'édition*, vous remarquerez un nouveau bloc d'options : *Line Wrap*. Cette option va vous permettre de choisir le comportement des retours à la ligne automatiques, que vous pouvez activer dans *Affichage -> Retour automatique à la ligne*.

- **Défaut** : le morceau coupé s'aligne au début de la fenêtre. C'était le comportement par défaut jusqu'à présent, et n'aidait pas franchement à la compréhension.

![Notepad++ Line Warp : le retour à la ligne automatique par **défaut**](/images/preferences/npp_linewarp_default.png)

- **Aligné** : le morceau coupé se place au même niveau que le début de la ligne. Ce comportement est désormais activé par défaut.

![Notepad++ Line Warp : le retour à la ligne automatique **aligné**](/images/preferences/npp_linewarp_aligned.png)

- **Indenté** : le morceau coupé se place à un niveau d'indentation supérieur à la ligne. Ce schéma reproduit une structuration standard du code.

![Notepad++ Line Warp : le retour à la ligne automatique **indenté**](/images/preferences/npp_linewarp_indented.png)

## Autres options

- *Afficher la numérotation des lignes* : affiche/cache la barre verticale indiquant les numéros de lignes. Vous-êtes sûr de vouloir sacrifier autant pour quelques pixels d'espace?
- *Afficher la marge de signet* : affiche/cache la barre verticale indiquant et permettant d'ajouter ou supprimer des signets.
- *Surligner la ligne actuelle* : par défaut Notepad++ surligne toute la ligne active. Si cela vous agasse, vous pouvez le désactiver ici.
