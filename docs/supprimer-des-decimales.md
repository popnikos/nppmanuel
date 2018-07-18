# Supprimer des décimales

Comment supprimer des décimales dans un fichier au moyen de [Notepad++](notepad-plus-plus.md) ?

Exemple :

    8 1.0 56.82 589,273

Résultat :

    8 1 56 589

## Avec des [expressions régulières](expressions-regulieres.md)

Ouvrir la fenêtre de remplacement avec <kbd>Ctrl</kbd>+<kbd>h</kbd>, et sélectionner le mode *Expressions Régulières*.

Rechercher "*un chiffre ou plus suivi d'un point ou d'une virgule puis d'au moins un chiffre*" :

```regex
([0-9]+)[.,][0-9]+
```

Et remplacer par uniquement la valeur entière capturée avec les parenthèse : 

```regex
\1
```
