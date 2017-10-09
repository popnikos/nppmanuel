---
layout: default
chapitre: 1
order: 3
---
# Interface

Notepad++ se compose d'une fenêtre unique dont la plupart des éléments peuvent être cachés, déplacés ou paramétrés.

## Barre d'outils

La barre d'outils est la barre supérieure composée d'icônes, raccourcis vers certaines fonctions de base. Toutes ces fonctions sont accessibles via des [raccourcis clavier](raccourcis-clavier.md) ou via la barre de menu, elle pourra donc être cachée dans les [préférences générales](préférences-générales.md).

- Créer, ouvrir, enregistrer, fermer ou imprimer des documents.
- Couper, copier, coller la sélection.
- Annuler ou rétablir des modifications.
- [Recherches et remplacements](recherches-et-remplacements.md) dans le document.
- Zommer/dézommer.
- Synchroniser le défilement entre les vues.
- Activer les retours à la ligne, afficher les caractères d'espacement ou les guides d'indentation, définir le langage, afficher le [Plan du document](plan-du-document.md) ou la [Liste des fonctions](liste-des-fontions.md).
- Enregistrer, exécuter ou enregistrer des [macros](macros.md).
- Fonctionnalités liées aux [plugins](plugins.md).

##  Zone d'édition

Il s'agit évidemment de la zone centrale du logiciel. La partie [Zone d'édition](préférences-zone-d'édition.md) des [préférences](préférences.md) lui est dédié afin de personnaliser certains détails et ses fonctionnalités.

![La zone d'édition](/assets/img/npp_zone_edition.png)

La zone d'édition peut être scindées en deux vues distinctes, à la manière d'un split-screen vertical, chaque partie pouvant acceuillir des documents différents ou le clone d'un document. Un document cloné dans une autre vue pourra être observé et édité de deux endroits en même temps.

*Affichage* -> *Déplacer/cloner le document actuel*

![Deux documents dans deux vues](/assets/img/npp_vues.png)

![Un document cloné](/assets/img/npp_vues_clone.png)

La séparation entre les deux vues peut être déplacée avec la souris pour laisser plus d'espace à l'une ou l'autre.

### Délimiteurs jumeaux

Lorsqu'un délimiteur du langage est sélectionné, comme un crochet, une parenthèse ou l'accolade d'une instruction, il se colore en rouge et son jumeau ouvrant ou fermant aussi. Si le délimiteur jumeau est manquant, l'élément sélectionné ne se colorera pas.

Dans le cas d'une accolade dans un langage de type C une ligne de pointillé rouge indique son niveau d'indentation, et dans le cas d'un [langage de balisage](https://fr.wikipedia.org/wiki/Langage_de_balisage) les balises d'ouverture et de fermeture correspondantes se colorent aussi.
!

|![Une paire de parenthèses](/assets/img/notepadpp_paireparentheses.png)|![Indication des indentations](/assets/img/notepadpp_paireaccolades.png)|![Indication des balises](/assets/img/notepadpp_pairebalises.png)
|--|--|--|
|Parenthèses|Accolades|Balises|

## Les onglets

Les onglets peuvent être glissés-déposés au sein de la barre d'onglets pour être réorganisés, glissés-déposés dans les vues pour créer ou changer de vue, et glissés-déposés en dehors du logiciel pour changer d'instance de Notepad++.

Une partie des [préférences générales](préférences-générales.md) lui est dédiée.

![La barre d'onglets](/assets/img/npp_barre_onglets.png)

![](/assets/img/notepadpp_ongletactif.png)
Pour une meilleure visibilité, l'onglet actif est par défaut surplombé d'une fine barre orange et les onglets inactifs sont assombris.

![](/assets/img/notepadpp_etatfichier.png)
L'icône de disquette précédant le nom du fichier sur un onglet indique l'état de sauvegarde du fichier. Si la disquette est bleue les dernières modifications ont été enregistrées, si elle est rouge c'est que le fichier a été modifié depuis la dernière sauvegarde. Cette indication n'est pas une analyse comparative du contenu réel du fichier, mais simplement un rappel basé sur les actions d'édition. Ajouter un espace puis le supprimer indiquera par exemple une disquette rouge, alors que le contenu du fichier est identique.

### Changer de document

Des [raccourcis clavier](raccourcis-clavier.md) permettent de basculer sur un onglet spécifique ou de les passer en revue.

Lorsqu'il y a plus d'onglets que la largeur de la fenêtre ne puisse afficher deux boutons droite/gauche apparaissent pour les faire défiler. L'option "multiligne" des [préférences générales](préférences-générales.md) remplace ce comportement par l'affichage des onglets sur plusieurs lignes.

Le [Commutateur de document](commutateur-de-document.md) est une autre forme d'affichage des documents ouverts qui peut potentiellement remplacer la barre d'onglet, pour gagner de la place sur la zone d'édition ou gérer un plus grand nombre de documents.

## Barre d'état

La barre d'état est la barre inférieure contenant des informations sur le document actuel et la sélection. Elle ne peut pas être redimensionnée ou déplacée, et peut être désactivée dans les [préférences générales](préférences-générales.md).

![La barre d'état, là](/assets/img/npp_barre_etat.png)

Elle est scindée en plusieurs parties qui indiquent, de la gauche vers la droite :

- Le type de fichier/langage
- le nombre de bits et le nombre de lignes
- la position du curseur (ligne et colonne) et le nombre de caractères sélectionnés
- le type de retours à la ligne (UNIX, Mac, Windows)
- le type d'encodage du fichier (UTF8, ANSI, etc.)
- le mode de curseur (insertion ou écrasement)

### Fichier/language

![Langage utilisé et informations sur le contenu dans la barre d'état.](/assets/img/notepadpp_bottombar1.png)

Il est possible de définir le type de langage du document en utilisant le menu *Langage* ou en ouvrant/enregistrant un fichier (détection de l'extension).

Le langage par défaut d'un nouveau document est définit dans la partie [Nouveau document](préférences-nouveau-document.md) des [préférences](préférences.md).

### Formats de saut de ligne, encodage et mode de curseur

![Format des sauts de ligne, encodage du texte et type d'édition dans la barre d'état.](/assets/img/notepadpp_bottombar3.png)

Il est possible de changer le type d'encodage du document à la volée en utilisant le menu *Encodage*.

Le type d'encodage et le format des sauts de ligne par défaut d'un nouveau document est définit dans la partie [Nouveau document](préférences-nouveau-document.md) des [préférences](préférences.md).

## Panneaux

En dehors de la zone d'édition, certaines interfaces prennent place dans des panneaux modulables. C'est souvent le cas des [plugins](plugins.md), ou de fonctionnalités alternatives comme la [Liste des fonctions](liste-des-fonctions.md) ou la [Gestion de projet](gestion-de-projet.md).

Ces panneaux peuvent-être glissés-déposés via leur barre de titre. En approchant un bord de la fenêtre, ils peuvent être placés de chaque côté de la zone d'édition, horizontalement ou verticalement, et peuvent ensuite être redimensionnés en tirant leur bord intérieur. En les glissant à un autre endroit ils deviennent flottants et peuvent être placés n'importe où, au-dessus de la fenêtre principale ou en dehors.

Lorsque deux panneaux sont placés au même endroit une barre d'onglets spécifique permet de choisir celui à afficher.

![Un panneau à gauche, deux à droite et un panneau flottant](/assets/img/npp_panels.png)
