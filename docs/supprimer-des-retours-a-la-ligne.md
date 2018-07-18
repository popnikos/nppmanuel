# Supprimer des retours à la ligne

Comment supprimer des retours à la ligne dans un fichier au moyen de [Notepad++](notepad-plus-plus.md).

Exemple :

    a
    b
    c

Résultat :

    abc

Ou, si possible, avec n'importe quel délimiteur :

    a, b, c

## Avec un [raccourci clavier](raccourcis-clavier.md)

Sélectionner plusieurs lignes et utiliser le raccourci <kbd>Ctrl</kbd>+<kbd>j</kbd>.

## Avec des [recherches et remplacements](recherches-et-remplacements.md)

En remplaçant le caractère de saut de ligne par un caractère voulu.

Sélectionner un retour à la ligne en sélectionnant de la fin d'une ligne au début de la suivante, puis ouvrir la fenêtre de remplacement avec <kbd>Ctrl</kbd>+<kbd>h</kbd> (le champ de recherche et rempli par la sélection) et choisir *Remplacer tout*. Le texte dans *Remplacer par* sert de délimiteur.

Il est aussi possible de rechercher `\r?\n` (voir [CRLF](https://fr.wikipedia.org/wiki/Carriage_Return_Line_Feed)) en mode de recherche étendu.

## Avec des [macros](macros.md)

En enregistrant l'appui sur la touche `Fin` du clavier.

- Lancer l'enregistrement avec <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>r</kbd>,
- Aller en fin de ligne avec la touche `Fin`,
- Supprimer le retour chariot avec la touche `Suppr`,
- Écrire ce qui séparera les mots, comme une virgule par exemple,
- Stopper l'enregistrement avec <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>r</kbd>,
- Ouvrir la fenêtre *Exécuter une macro en boucle* depuis le menu *Macro*,
- Sélectionner *Jusqu'à la fin du fichier* et valider.

```
un
deux
trois
...
```

Donne ainsi :

    un,deux,trois,...
