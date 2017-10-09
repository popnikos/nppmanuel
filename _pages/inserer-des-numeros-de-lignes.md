---
layout: default
---
# Insérer des numéros de ligne

## Avec l'[éditeur de Colonne](edition-en-colonne.md)

Placer le curseur à l'endroit voulu et ouvrir l'Éditeur de Colonne avec `Alt+C`.

Choisir *Nombre à insérer*, *Nombre initial : 1*, *Augmenter de : 1* et appuyer sur *OK*.

Pour séparer les numéros du reste du texte, placer le curseur entre les deux et utiliser *Texte à insérer* de l'Éditeur de Colonne.

## Avec [TextFX](plugins/textfx.md)

Via la fonction automatique *Insert Line Numbers*.

    00000001 a
    00000002 b
    00000003 c

Pour supprimer les zéros en trop ou formater le résultat, utiliser la fenêtre de [recherches et remplacements](recherches-et-remplacements.md) et les [expressions régulières](expressions-regulieres.md), en recherchant par exemple `^00+`.