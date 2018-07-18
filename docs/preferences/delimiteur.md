---
order: 13
---

# Délimiteur

[Préférences](../preferences.md) permettant de changer la définition d'un "mot" pour la coloration automatique et la recherche dans [Notepad++](../notepad++.md).

![Interface](./images/npp_settings_delimiter.png)

## Liste de caractères de mot

Par défaut, un mot est défini comme étant un ensemble de caractères alphanumériques ou de tirets bas (correspondant à la définition d'un mot en [expression régulière](../expressions-regulieres.md)).

Cette définition est utilisée pour la sélection de mot au double-clic et pour l'option *Mots entiers uniquement* des [recherches et remplacements](recherches-remplacements.md).

Ce paramètre permet de rajouter des caractères supplémentaires à cette définition. Ajouter le caractère `$` permet de sélectionner l'ensemble de `$tomate` par exemple, quand le comportement par défaut aurait saisi `tomate`.

## Sélection dans les délimiteurs

Il est possible de sélectionner le contenu entre deux délimiteurs, par défaut des parenthèses, au moyen de <kbd>Ctrl</kbd>+`double clic` entre les délimiteurs. Ces paramètres permettent de changer la paire de délimiteurs, et d'activer la sélection sur plusieurs lignes si les délimiteurs sont sur des lignes différentes.