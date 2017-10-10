---
layout: default
title: Supprimer des retours à la ligne
---
# Supprimer des retours à la ligne

Comment supprimer des retours à la ligne dans un fichier au moyen de [Notepad++](notepad++.md).

Exemple :

    a
    b
    c

Résultat :

    abc

Ou n'importe quel délimiteur :

    a, b, c

## Avec des [recherches et remplacements](recherches-et-remplacements.md)

Sélectionnez un retour à la ligne, en sélectionnant de la fin d'une ligne au début de la suivante puis ouvrez la fenêtre de remplacement avec <kbd>Ctrl</kbd>+<kbd>h</kbd> et remplacez tout. Le texte dans *Remplacer par* servira de délimiteur.

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

    un
    deux
    trois
    ...

Donne ainsi :

    un,deux,trois,...
