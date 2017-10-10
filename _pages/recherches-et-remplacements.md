---
layout: default
chapitre: 3
order: 1
---
# Recherches et remplacements

Un des gros plus de Notepad++ est sa gestion des recherches et remplacements. Utiliser ces fonctionnalités systématiquement fais gagner un temps précieux, surtout avec la maîtrise des [expressions régulières](expressions-regulieres.md).

## Recherche

L'onglet de recherche de la fenêtre de recherches/remplacements s'ouvre au moyen :

- Du menu *Recherche -> Recherche*,
- Du raccourci clavier <kbd>Ctrl</kbd>+<kbd>F</kbd>,
- De l'icône ![](/images/notepadpp_findicon.png) dans la barre de menu.

Faire préalablement une sélection, ou simplement pointer un mot, pré-remplis le champ de recherche.

![Fenêtre de recherche](/images/notepadpp_find.png)

- **Suivant** : sélectionne l'occurrence suivante.
- **Compter** : compte le nombre d'occurrences.
- **Rechercher dans tous les documents ouverts** : affiche les résultats de la recherche dans tous les onglets.
- **Rechercher dans le document actuel** : affiche les résultats de la recherche dans l'onglet actif.

- Pour afficher toutes les occurrences de la recherche directement dans le document, sélectionnez *Marquer les lignes* ou/et *Colorer les mots trouvés* puis cliquez sur *Rechercher tout*. *Purger* permet d'effacer les indicateurs (marquages de lignes et surlignages), *Purger à chaque fois* permet de faire cela à chaque clic sur *Rechercher tout*.

- **Mot entier uniquement** : limite la recherche aux éléments séparés du reste par un espace. Ainsi, rechercher "to" dans "tomate" ne marchera pas avec cette option, mais dans "to mate" oui.
- **Respecter la casse** : fais une différenciation entre les majuscules et les minuscules.
- **Boucler** : revenir au début du document une fois la fin atteinte avec *Suivant*.

### Mode de recherche

Le *Mode de recherche* permet de passer d'un mode normal aux [expressions régulières](expressions-regulieres.md).

## Remplacement

L'onglet de recherche de la fenêtre de recherches/remplacements s'ouvre au moyen :

- Du menu *Recherche -> Remplacer*,
- Du raccourci clavier <kbd>Ctrl</kbd>+<kbd>H</kbd>,
- De l'icône ![](/images/notepadpp_replaceicon.png) dans la barre de menu.

![Fenêtre de remplacement](/images/notepadpp_replace.png)

L'interface est similaire à l'onglet de recherche décrit précédemment.

**Suivant** sélectionne seulement l'occurrence suivante, **Remplacer** la remplace et cherche la suivante.

## Recherche dans un dossier

L'onglet de recherche de la fenêtre de recherches/remplacements s'ouvre au moyen :

- Du menu *Recherche -> Rechercher dans les répertoires*,
- Du raccourci clavier <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>f</kbd>,

![Fenêtre de recherche/remplacement par dossier](/images/notepadpp_findfolder.png)

- **Recherche** : élément à rechercher.
- **Remplacer par** : élément de remplacement.
- **Filtres** : limiter aux fichiers correspondant au filtre.
- **Dossier** : dossier dans lequel rechercher.

- **Trouvez tout** : liste les résultats de la recherche.
- **Remplacer tout** : exécute les remplacements.

- **Suivre le doc. actuel** : rechercher à l'emplacement du document actuel.
- **Sous-dossiers** : effectue une recherche récursive dans les sous-dossiers.
- **Dossiers cachés** : inclue les dossiers cachés par Windows.

## Résultats de recherches

![*Find result*, résultats de recherches](/images/notepadpp_findresult.png)

Une frame s'affiche en pied de page indiquant le fichier, les lignes, l'emplacement dans la ligne.
Chaque résultat ou chaque groupe de résultats peut se dérouler/enrouler en cliquant sur les petits "-" à gauche.

## Les plugins utiles

La fenêtre *Find/Replace* de [TextFX](plugins/textfx.md) est faite pour la manipulation d'expressions régulières, et contiens plusieurs fonctionnalités supplémentaires rendant le travail plus aisé.

Le plugin [RegEx Helper](plugins/regex-helper.md) permet de visualiser directement tous les résultats d'un motif d'expression régulière.