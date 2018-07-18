---
plugin:
    name: TextFX
    desc: Outils d'édition
    date: 2005
    tags: ['edition', 'expreg']
---
# TextFX

Ce [plugin](../plugins.md) intègrait un très grand nombre d'outils d'édition et d'assistance à la manipulation de texte. Un des tout premiers plugins créé pour Notepad++, il a été développé entre 2005 et 2007 par Chris Severance avant que ses fonctionnalités ne soient peu à peu disponibles nativement dans Notepad++, parfois via des [raccourcis clavier](../raccourcis-clavier.md), ou au fil de l'amélioration des [recherches et remplacements](../recherches-et-remplacements.md) et du support des [expressions régulières](../expressions-regulieres.md).

Les sources sont disponibles sur son [site officiel](http://textfx.no-ip.com/textfx/index.htm).

## Interface

TextFX n'avait pas d'interface particulière car proposait des outils effectuant uniquement des actions ponctuelles, qui s'exécutaient par la barre de menu.

## Characters

### Guillemets et apostrophes

Tous les langages de programmation nécessitent leur manipulation lors du traitement de chaines de caractères. Ces fonctions permettent de le faire en un clic.

Conversion

- **Convert quotes "** : remplace les apostrophes par des guillemets.
- **Convert quotes '** : remplace les guillemets par des apostrophes.
- **Swap quotes ("<->')** : intervertit guillemets et apostrophes.
- **Drop quotes (" & ')** : supprime les guillemets et les apostrophes.

Échappement

- **Escape " to \"** : échappe les guillemets.
- **Escape ' to \'** : échappe les apostrophes.
- **Escape ' to \"** : échappe les apostrophes en guillemets.
- **Escape both "&' to \"&\'** : échappe les guillemets et les apostrophes.
- **unEscape \" to "** : supprime les échappements des guillemets.
- **unEscape \' to '** : supprime les échappements des apostrophes.
- **unEscape \"&\' to "&'** : supprime les échappements des guillemets et des apostrophes.
- **Escape " to ""** : échappe les guillemets en double-guillemets.
- **Escape ' to ""** : échappe les apostrophes en double-guillemets.
- **unEscape "" to "** : remplace les doubles-guillemets par des guillemets simples.
- **unEscape "" to '** : remplace les doubles-guillemets par des apostrophes.

### Majuscules et minuscules

- **UPPER CASE** : passe tous les caractères possibles en majuscule.
- **lower case** : passe tous les caractères possibles en minuscule.
- **Proper Case** : passe la première lettre des mots en majuscule, le reste en minuscule.
- **Sentence case** : passe la première lettre des phrases en majuscule, le reste en minuscule.
- **iNVERT cASE** : passe la première lettre des mots en minuscule, le reste en majuscule.
- **Zap all characters to space** : remplace tous les caractères par des espaces.
- **Zap all non-printable characters to #** : replace tous les caractères non-imprimables par des dièses.

## Quick

### Find/Replace

- **Find/Replace** : ouvre une fenêtre de recherche et remplacement alternative.

![Fenêtre de recherche/remplacement de TextFX](../images/notepadpp_findreplace.png)

Avantages majeurs vis à vis de la [recherche standard](Recherches et remplacements.md) :

- sauvegarde des motifs d' [expressions régulières](expressions-regulieres.md)
- raccourcis spécifiques
- champs de plusieurs lignes

Elle peut-être ouverte avec <kbd>Ctrl-R</kbd>.

### Éléments jumeaux

- **Find matching {[(\<brace\>)]}** : place le curseur à l'accolade, au crochet, à la parenthèse ou à la balise jumelle.
- **Mark to matching {[(\<brace\>)]}** : sélectionne la balise ou le bloc entre parenthèses, crochets ou accolades. Disponible avec le raccourci <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>b</kbd>.
- **Delete Marked {[(\<brace\>)]} Pair** : supprime la paire d'accolades, de crochets, de parenthèses ou de balises sélectionnées.

## Edit

### Insertions en colonne

- **Fill down insert** : lors d'une sélection rectangulaire (`Alt`), insère les caractères de la première ligne sélectionnée tout au long des colonnes sélectionnées.
  - **Fill down overwrite** : lors d'une sélection rectangulaire (`Alt`), remplace chaque caractère des colonnes sélectionnées par les caractères de la première ligne sélectionnée.
- **Insert (Clipboard) through lines** : lors d'une sélection rectangulaire (`Alt`), insère le contenu du presse-papier dans chaque ligne sélectionnée.

### Indentations

- **Reindent C++ code** : indente automatiquement un code C++ (fonctionne avec tout langage à la syntaxe similaire, "à accolades").
- **Leading space to tabs or tabs to spaces** : remplace les indentations de quatre espaces par des tabulations.
- **Leading space to tabs or tabs to spaces width=8** : remplace les indentations de huit espaces par des tabulations.
- **Trim Trailing Spaces** : supprime les espaces inutiles (en fin de lignes).
- **Indent text sticky left margin** : ajoute une indentation à toutes les lignes  sélectionnées au moins au même niveau que la première.
- **Delete Blank Lines** : supprime les lignes vides (qui n'ont ni espaces ni tabulations).
- **Delete Surplus Blank Lines** : supprime les lignes vides (espaces et tabulations ignorés).

Coupes de lignes

- **Unwrap text** : replie un code. Rassemble sur une seule ligne les classes, fonctions, etc... Utiliser uniquement pour les langages à [instructions terminées](https://fr.wikipedia.org/wiki/Langage_de_programmation#S.C3.A9paration_des_instructions).
- **Unwrap text** : replie un code en limitant la taille d'une ligne à 72 caractères. Rassemble sur une seule ligne les classes, fonctions, etc... Utiliser uniquement pour les langages à [instructions terminées](https://fr.wikipedia.org/wiki/Langage_de_programmation#S.C3.A9paration_des_instructions).
- **Split lines at (clipboard character) or ,** : remplace les virgules par des retours à la ligne.

## Convert

### Html

- **Encode URI Component** : convertis les caractères non-ASCII en [code url](http://www.w3schools.com/TAGS/ref_urlencode.asp).
- **Encode HTML (&<>")** : convertis les caractères cités en code html.
- **Strip HTML tags table tabs** : supprime les balises html.
- **Submit to W3C HTML Validator** : soumettre le code au validateur html du w3c.
- **Submit to W3C CSS Validator** : soumettre le code au validteur css du w3c.
- **Convert text to code command** : convertis du texte en code d'affichage du langage utilisé (limité à PHP, ASP, Javascript, C et C++). Par exemple, avec le langage définis à PHP, peut convertir : `<span class="maclass">contenu</span>` en `echo "<span class=\"maclass\">contenu</span>\n";`.

### Encodage de nombres

Permettent de convertir des nombres en système décimal, binaire, octal ou hexadécimal.

- **Convert Decimal Number to Binary** / **Convert Binary Number to Decimal**
- **Convert Decimal Number to Octal** / **Convert Octal Number to Decimal**
- **Convert Decimal Number to hex** / **Convert Hex Number to Decimal**

    Decimal : 3898
    Binary : $111100111010
    Octal : 074723898
    Hex : 0xf3a

### Encodage de texte

Permettent d'encoder du texte en hexadécimal 16/32/64/128, en ascii, en ebcdic...

- **Convert text to Hex-16/32/64/128**
- **Convert ASCII to EBCDIC** / **Convert EBCDIC to ASCII**

## Insert

### Fichier

- **Current Full Path** : insère le chemin complet du fichier.
- **Current File Name** : insère le nom du fichier.
- **Current Directory** : insère le répertoire du fichier.

Utiliser de préférence les fonctions de Notepad++ *Edition -> Copier dans le presse-papiers*, qui semblent mieux fonctionner.

### Date

- **Date & Time - short format** : insère la date et l'heure.`20:54 14/07/2010`
- **Date & Time - long format** : insère la date et l'heure avec le jour et le mois en toutes lettres.`20:54 mercredi 14 juillet 2010`

## HTML Tidy

Voir <http://sourceforge.net/apps/mediawiki/notepad-plus/index.php?title=HTML_Tidy>

## Tools

### Tri

Ces fonctions permettent de trier les lignes alphabétiquement et numériquement.

- **Sort lines case sensitive (at column)** : trie chaque ligne en respectant la casse. Les majuscules sont placées avant les minuscules.

    C
    6
    B
    a

Sera trié en :

    6
    B
    C
    a

- **Sort lines case insensitive (at column)** : trie chaque ligne sans respecter la casse.

    C
    6
    B
    a

Sera trié en :

    6
    a
    B
    C

- **Sort ascending** : définis le sens de tri.
- **Sort outputs only UNIQUE (at columns) lines** : si activé, de tous les doublons (les lignes identiques) un seul sera gardé.

### Divers

- **Insert Ascii Chart or Character** : si aucun caractère n'est sélectionné, insère la table de référence ASCII. Si un caractère est sélectionné, insère la référence ASCII de ce caractère.

    36 \x24 (0x24) \44  (044 )   100100       $

- **Insert Ruler** : insère une règle de mesure de texte.

    ---  0---|--- 10---|--- 20---|--- 30---|--- 40---|--- 50---|--- 60---|...
    123456789|123456789|123456789|123456789|123456789|123456789|123456789|...

- **Insert Line Numbers** : insère les numéros de lignes dans le texte.

    00000001 a
    00000002 b
    00000003 c

Pour supprimer les zéros en trop, ouvrez la fenêtre de [remplacement](../recherches-et-remplacements.md), activez les [expressions régulières](../expressions-regulieres.md) et recherchez **^00+**.

- **Delete Line Numbers or First Words** : supprime les numéros en début de lignes ou le premier mot.
- **Clean eMail > Quoting** : supprime les symboles **>** de citation en début de lignes.

## Settings

### Automatismes

- **Autoclose XHTML/XML \<Tag\>** : ferme automatiquement les balises html et xml.
- **Autoclose {([Brace** : ferme automatiquement les accolades, parenthèses et crochets.
- **Autoconvert typed leading spaces to tabs** : convertis automatiquement l'écriture de quatre espaces par une tabulation.
- **Autoconvert typed HTML/XML to &entities;** : en html, convertis automatiquement l'écriture des symboles *&*, *"* et *>* en leur code html.

###

- **Move quick menus out of 'Plugins' menu** : affiche les menus *TextFX Quick* et *TextFX Viz* dans la barre de menu, en dehors du menu *TextFX*.
