# Compter des caractères, lignes et paragraphes


## Compter le nombre de caractères et de lignes

La deuxième partie de la barre d'état indique les statistiques relatives au contenu avec, dans l'ordre : le nombre de caractères, le poid en bytes et le nombre de lignes du fichier.

Le nombre de caractères indiqué comprend les espaces et retours à la ligne.

![Langage utilisé et informations sur le contenu dans la barre d'état.](./images/notepadpp_bottombar1.png)

Depuis la version 5.8, la barre d'état n'indique plus le nombre de caractères. Il faut ouvrir la fenêtre *Summary* en double-cliquant sur cette zone de la barre d'état, ou par le menu *Affichage -> Summary*.

## Compter les caractères sélectionnés, situer le curseur

La troisième partie de la barre d'état indique les statistiques relatives au curseur et à la sélection avec, dans l'ordre : Le numéro de ligne et de colonne ou est situé le curseur, le nombre de caractères sélectionnés, le poid de la sélection et le nombre d'endroits sélectionnés (Multiédition).

![Position du curseur et informations sur la sélection dans la barre d'état.](./images/notepadpp_bottombar2.png)

## Compter le nombre de mots

### Avec la fenêtre *Summary*

Depuis la version 5.8.1, la fenêtre *Summary* indique le nombre de mots du document.

### Avec des [expressions régulières](expressions-regulieres.md)

Ouvrir la fenêtre de [recherches et remplacements](recherches-et-remplacements.md) avec <kbd>Ctrl</kbd>+<kbd>F</kbd> et sélectionner le mode *Expression régulière*. Entrer le motif suivant :

```expreg
\w+
```

Et cliquer sur *Compter*.

Vous pouvez aussi compter le nombre de mots dans plusieurs documents en utilisant *Rechercher dans tous les documents ouverts*. Le nombre de mots est alors indiqué dans les résultats de recherche :

    (1843 hits in 6 files)
