# Les expressions régulières

L'expression régulière est une syntaxe servant à décrire un morceau de texte variable, afin de chercher des correspondances et potentiellement d'effectuer des remplacements.

Son universalité et sa grande malléabilité permet, dans le cadre d’un logiciel de traitement de texte, d'automatiser des tâches répétitives ou de traiter des grands volumes de données sans s'appuyer sur des fonctionnalité spécifiques au logiciel utilisé, comme pour [insérer du texte à chaque ligne](inserer-du-texte.md#avec-des-expressions-regulieres) ou [compter des mots](compter.md#avec-des-expressions-regulieres).

<PagesList match="/expressions-regulieres/."/>

Dans [Notepad++](notepad-plus-plus.md) les expressions régulières sont disponibles sous forme d'option de *Mode de remplacement* dans la fenêtre des [recherches et remplacements](recherches-et-remplacements.md).

![Fenêtre de recherche avec expression régulière](../images/npp_find-regex.png)

Les expressions régulières n'y sont sensibles à la casse que si l'[option de recherche ](recherches-et-remplacements.md#options-de-recherche) `Respecter la casse` est activée. Dans le cas contraire, le caractère majuscule `A` ne sera pas différencié de sa version minuscule `a`.

Par défaut le point ne comprend pas les retours à la ligne, à moins que l'option "*. comprend lignes retours*" n'ait été cochée. Le comportement par défaut de `.+` revient ainsi à un traitement ligne par ligne.

## Plugins

Certains plugins peuvent simplifier l'utilisation ou la visualisation des expressions régulières ou offrir des interfaces spécialisées (comme la fenêtre Find/Replace de TextFX.

<PluginList :columns="{name: 'Plugin', desc: 'Description', date: 'Création'}" tag="expreg"/>