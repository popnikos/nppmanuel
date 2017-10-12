---
layout: default
title: Insérer du texte
---
# Insérer du texte en début, milieu ou fin de ligne

Comment insérer du texte en début, milieu ou fin de ligne au moyen de [Notepad++](notepad++.md).

Exemple :

  abricot
  banane
  cerise

Résultat :

```
- abricot
- banane
- cerise
```

Ou :

```
abricot -
banane -
cerise -
```

## Avec le [mode colonne](edition-en-colonne.md)

Placer le curseur en début ou milieu d'une ligne, utiliser la combinaison <kbd>Alt</kbd> et cliquer glisser, ou <kbd>Alt</kbd>+<kbd>Shift</kbd>+`Flèche du bas` pour étendre l'édition à la colonne de dimension voulue et taper le texte voulu.

## Avec l'[éditeur de Colonne](edition-en-colonne.md)

Placer le curseur en début ou milieu d'une ligne et ouvrir l'Éditeur de Colonne avec <kbd>Alt</kbd>+<kbd>C</kbd>.
Choisir *Texte à insérer*, entrer le texte voulu et appuyer sur *OK*.

## Avec des [expressions régulières](expressions-regulieres.md)

Ouvrir la fenêtre de remplacement avec <kbd>Ctrl</kbd>+<kbd>h</kbd>, et sélectionner le mode *Expressions Régulières*.

Rechercher un début de ligne avec le symbole `^` ou une fin de ligne avec le symbole `$` (voir [syntaxe de base des expressions régulières](expressions-regulieres-syntaxe-de-base.md)) et remplacer par le texte voulu.

## Avec des [macros](macros.md)

En enregistrant l'appui sur la touche du clavier <kbd>Début</kbd> ou <kbd>Fin</kbd>.

- Lancer l'enregistrement avec <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>r</kbd>,
- Aller en début ou fin de ligne avec la touche <kbd>Début</kbd> ou <kbd>Fin</kbd>,
- Pour se déplacer en milieu de ligne, utiliser la `flèche droite`.
- Écrire ce qu'on veut insérer,
- Stopper l'enregistrement avec <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>r</kbd>,
- Ouvrir la fenêtre *Exécuter une macro en boucle* depuis le menu *Macro*,
- Sélectionner *Jusqu'à la fin du fichier* et valider.