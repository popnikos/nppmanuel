---
layout: default
title: Insérer du texte en fin de ligne
---
# Insérer du texte en fin de ligne

## Avec des [expressions régulières](expressions-regulieres.md)

Ouvrir la fenêtre de remplacement avec <kbd>Ctrl</kbd>+<kbd>h</kbd>, et sélectionner le mode *Expressions Régulières*.

Rechercher le dernier caractère en fin de ligne (dans un groupe pour pouvoir le ré-écrire) avec :

```regex
(.)$
```

Remplacer par le résultat du groupe suivi du texte voulu, par exemple :

```regex
\1 :
```

Ainsi le texte :

  abricot
  banane
  cerise

Deviens :

  abricot :
  banane :
  cerise :

## Avec des [macros](macros.md)

En enregistrant l'appui sur la touche Fin du clavier.

- Lancer l'enregistrement avec <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>r</kbd>,
- Aller en fin de ligne avec la touche `Fin`,
- Écrire ce qu'on veut insérer,
- Aller à la ligne suivante en appuyant une fois sur `->`,
- Stopper l'enregistrement avec <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>r</kbd>,
- Ouvrir la fenêtre *Exécuter une macro en boucle* depuis le menu *Macro*,
- Sélectionner *Jusqu'à la fin du fichier* et valider.

  1
  2
  3

Donnerait par exemple, en rajoutant `.0` :

  1.0
  2.0
  3.0
