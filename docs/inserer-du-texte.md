# Insérer du texte à chaque ligne

Comment insérer du texte en début, milieu ou fin de ligne au moyen de [Notepad++](notepad-plus-plus.md).

Exemple :

```
abricot
banane
cerise
```

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

Il est aussi possible d'insérer un nombre qui s'incrémente à chaque ligne avec *Nombre à insérer*, par exemple *Nombre initial : 1* et *Augmenter de : 1* :

    1a
    2b
    3c

Pour séparer les numéros du reste du texte on peut ensuite utiliser *Texte à insérer*.

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

## Avec [TextFX](plugins/textfx.md)

Il est possible d'insérer automatiquement des numéros de lignes avec la fonction *Insert Line Numbers*.

    00000001 a
    00000002 b
    00000003 c

Pour supprimer les zéros en trop ou formater le résultat, on peut utiliser utiliser la [recherche et remplacement](recherches-et-remplacements.md) et les [expressions régulières](expressions-regulieres.md) (en recherchant par exemple `^00+`), ou avec le [mode colonne](edition-en-colonne.md).