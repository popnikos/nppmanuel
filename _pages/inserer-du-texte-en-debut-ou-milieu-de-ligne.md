---
layout: default
---
# Insérer du texte en début ou milieu de ligne

## Avec le [mode colonne](edition-en-colonne.md)

Placer le curseur en début ou milieu de ligne, utiliser la combinaison `Alt`, `Shift` et `Flèche du bas` pour étendre l'édition à la colonne de dimension voulue et taper le texte voulu.

## Avec l'[éditeur de Colonne](edition-en-colonne.md)

Placer le curseur en début ou milieu de ligne et ouvrir l'Éditeur de Colonne avec `Alt+C`.
Choisir *Texte à insérer*, entrer le texte voulu et appuyer sur *OK*.

## Avec des [expressions régulières](expressions-regulieres.md)

Ouvrir la fenêtre de remplacement avec `Ctrl-h`, et sélectionner le mode *Expressions Régulières*.

Rechercher le premier caractères en début de ligne (dans un groupe pour pouvoir le ré-écrire) avec :

```regex
^(.)
```

Remplacer par le texte voulu suivi du résultat du groupe, par exemple :

```regex
- \1
```

Ainsi le texte :

  abricot
  banane
  cerise

Deviens :

```
  - abricot
  - banane
  - cerise
```

## Avec des [macros](macros.md)

En allant en fin de ligne, puis encore à droite !

- Lancer l'enregistrement avec `Ctrl-Shift-r`,
- Aller en fin de ligne avec la touche `Fin`,
- Aller en début de ligne suivante en appuyant une ou plusieurs fois sur la touche `flèche droite` du clavier,
- Écrire ce qu'on veut insérer,
- Stopper l'enregistrement avec `Ctrl-Shift-r`,
- Ouvrir la fenêtre *Exécuter une macro en boucle* depuis le menu *Macro*,
- Sélectionner *Jusqu'à la fin du fichier* et valider.

  a
  b
  c

Pourrait donner ainsi :

```
- a
- b
- c
```
