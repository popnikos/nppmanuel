---
layout: default
chapitre: 3
order: 2
---
# Les expressions régulières

Une expression régulière ou [rationnelle](https://fr.wikipedia.org/wiki/Expression_rationnelle), en anglais *regular expression* (abrégé *regexp* ou *regex*), est une chaîne de caractère permettant de décrire un ensemble variable par l'utilisation d'une syntaxe précise. Cette chaîne de caractères est appelée motif, en anglais *pattern*.

```regexp
?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|).{8,}$
```

Dans [Notepad++](notepad++.md) les expressions régulières peuvent être utilisées pour effectuer des [recherches et remplacements](recherches-et-remplacements.md).

La maîtrise de la [syntaxe de base des expressions régulières](expressions-régulières-syntaxe-de-base.md), voire de sa [syntaxe avancée](expressions-régulières-syntaxe-avancée.md), est fondamentale pour exprimer tout le potentiel des logiciels de traitement de texte, de traitement de données, mais aussi de la majeure partie des langages de programmation.

## Notions de base

L'expression régulière permet de décrire précisément quelque chose de variable et permet ainsi de chercher des correspondances, et potentiellement d'effectuer des remplacements. C'est souvent, dans le cadre d'un logiciel de traitement de texte, le moyen d'automatiser des tâches répétitives ou de traiter des grands volumes de données.

On dicerne différentes choses :

Un **texte source**, sur lequel s'effectue la recherche. Par exemple la phrase :

    Dans la nature, tous les nounours mènent au nord.

Le **motif de recherche**, qui décrit quoi chercher dans ce texte, par exemple :

    "les mots commençant par un N"

Les **résultats de la recherche**, qui seraient ici :

    nature, nounours, nord

Et optionnellement le **motif de remplacement**, qui décrit par quoi remplacer chaque résultat. Par exemple :

    "tomate"

Ce qui nous donnerait ici un superbe résultat.

    Dans la tomate, tous les tomate mènent au tomate.

Passons à la [syntaxe de base](expressions-régulières-syntaxe-de-base.md).
