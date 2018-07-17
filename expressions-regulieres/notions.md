---
order: 1
---

# Notions de base

Une expression régulière ou [rationnelle](https://fr.wikipedia.org/wiki/Expression_rationnelle), en anglais *regular expression* (abrégé *regexp* ou *regex*), est une chaîne de caractère permettant de décrire un ensemble variable par l'utilisation d'une syntaxe précise. Cette chaîne de caractères est appelée motif, en anglais *pattern*.

```regexp
?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|).{8,}$
```

On dicerne différentes choses :

Un **texte source**, sur lequel s'effectue la recherche. Par exemple la phrase :

    Dans la nature, tous les nounours mènent au nord.

Le **motif de recherche**, qui décrit quoi chercher dans ce texte, par exemple :

    "les mots commençant par un N"

Les **résultats de la recherche**, qui seraient ici au nombre de trois :

    nature, nounours, nord

Et optionnellement le **motif de remplacement**, qui décrit par quoi remplacer chaque résultat. Par exemple :

    "tomate"

Ce qui nous donnerait ici un superbe résultat.

    Dans la tomate, tous les tomate mènent au tomate.