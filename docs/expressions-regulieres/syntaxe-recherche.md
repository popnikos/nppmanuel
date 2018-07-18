---
order: 2
---
# Syntaxe des motifs de recherche

## Caractères

|Symbole|Description|Exemple
|:-:|:-|:-|
||Tout caractère, s'il n'a pas de signification particulière dans les expressions régulières, se désigne lui-même.|`a` désigne `a`, `µ` désigne `µ`, etc.
|`.`|Un point désigne n'importe quel caractère, comme un joker.|`a.c` désigne littéralement "la lettre a, puis n'importe quel caractère, puis la lettre c". Cela pourrait être `abc` ou `a:c` mais pas `123`

## Répétitions

|Symbole|Description|Exemple
|:-:|:-|:-|
|`*`|Une étoile indique que le symbole précédent est présent n'importe quel nombre de fois (même 0 fois).|`ab*c` désigne  "la lettre a, n'importe quel nombre de fois la lettre b, puis la lettre c". Cela peut être `ac`, `abc`, `abbbbbc`, etc.
|`+`|Un signe plus indique que le symbole précédent est présent au moins une fois.|`ab+c` désigne littéralement "la lettre a, au moins une fois la lettre b, puis la lettre c". Cela peut désigner `abc`, `abbc`, `abbbbbc`, etc.

## Ensembles et groupes

|Symbole|Description|Exemple
|:-:|:-|:-|
|`[...]`|Un ensemble de caractères entre crochets désigne n'importe quel caractère présent dans la liste. L'ordre des caractères n'a pas d'influence.|`[t8=#]` désigne "soit la lettre t, soit le chiffre 8, soit le signe égal, soit le caractère dièse".
|`[^...]`|Si l'ensemble commence par un accent circonflexe alors cet ensemble est inversé et désigne n'importe quel caractère qui n'est **pas** dans la liste.|`[^rto_]` désigne "n'importe quel caractère à part les lettres r, t, o ou un tiret bas".
|`[..-..]`|Si un tiret sépare deux lettres ou deux nombres dans un ensemble, cela désigne une plage de caractères.|`[a-z4-8]` désigne "n'importe quelle lettre minuscule ou n'importe quelle chiffre entre 4 et 8".
|`(...)`|Les parenthèses définissent un groupe, ou sous-motif, qui peut être répété ou récupéré dans un motif de remplacement.|`a(bc)+` désigne "la lettre a puis au moins une fois le groupe de lettres ab". Cela pourrait correspondre à `abc`, `abcbc`, `abcbcbcbcbc`, etc.

Pour intégrer un accent circonflexe dans un ensemble et qu'il ne soit pas confondu avec une marque d'inversion, il ne faut pas le placer en début d'ensemble, par exemple `[a^b]` désigne "a, b ou un accent circonflexe", alors que `[^ab]` désigne "tout sauf a ou b".

Pour intégrer le tiret dans un ensemble et qu'il ne soit pas confondu avec une marque de plage de caractère, il faut le placer en début ou en fin d'ensemble, par exemple `[-1-4]` désigne "un tiret ou un nombre de 1 à 4".

## Échappement

Pour désigner un caractère qui est utilisé dans la syntaxe des expressions régulières, comme un point, une parenthèse ou un crochet, il faut le faire précéder d'un antislash. On dit qu'on l'échappe.

|Symbole|Description|Example
|:-:|:-|:-
|`\`|Un antislash "échappe" le caractère qui suit : il le rend littéral.|`a\.c` désigne "la lettre a, puis un point, puis la lettre c", donc uniquement `a.c`

Ainsi `a\[bc\]` ne désigne pas un ensemble : les crochets étant échappés, ils se désignent eux-mêmes. Dans le motif `a[\bc]` par contre, l'antislash est contenu dans un ensemble et le motif désigne donc "la lettre a, puis b ou c ou un antislash", c'est à dire `a\`, `ab` ou `ac`.

## Raccourcis

Certains caractères, lorsqu'ils sont échappés, prennent une signification particulière. Ils servent de raccourcis afin de désigner des caractères blancs ou invisibles, ou pour désigner rapidement des ensembles plus complexes.

|Symbole|Description|Example
|:-:|:-|:-
|`\t`|La lettre t échappée désigne une [tabulation](https://fr.wikipedia.org/wiki/Tabulation).|
|`\n`|La lettre n échappée désigne un [saut de ligne](https://fr.wikipedia.org/wiki/Saut_de_ligne).|
|`\r`|La lettre r échappée désigne un [retour chariot](https://fr.wikipedia.org/wiki/Retour_chariot).|
|`\w`|La lettre w échappée désigne un caractère d'un mot (*word*).|Un mot est défini par ensemble de caractères alphanumériques ou de tiret bas, ce symbole correspond au motif `[0-9a-zA-Z_]`.
|`\d`|La lettre w échappée désigne un caractère numérique (*digit*).|Correspond au motif `[0-9]`.
|`\s`|La lettre s échappée désigne un caractère d'espacement (*space*).|Correspond au motif `[ \t\r\n\f]`.

Lorsqu'ils désignent un ensemble, les raccourcis existent en version majuscule qui désigne son **inverse**. `\D` par exemple désigne tout ce qui *n'est pas* un nombre.

## Ancres

Au lieu de désigner un caractère, certains signes désignent la position qui le précède ou le suit.

|Symbole|Description|Exemple
|:-:|:-|:-|
|`^`|Un accent circonflexe désigne le début d'une ligne.|`^.` désigne "un début de ligne, puis n'importe quel caractère". Autrement dit "n'importe quel caractère en début de ligne"
|`$`|Un signe dollar désigne la fin d'une ligne.|`^a$` désigne "un début de ligne, le caractère a, puis une fin de ligne", ou autrement dit : la lettre `a` seule sur une ligne
|`\<`|Un chevron ouvrant échappé désigne le début d'un "mot".|`\<.` désigne "un début de mot puis un caractère", ce qui correspond dans `ab 87 +c` à `a`, `8` et `c`.
|`\>`|Un chevron ouvrant échappé désigne la fin d'un "mot".|`.\>` désigne "un caractère puis une fin de mot", ce qui correspond dans `ab 87 +c` à `b`, `7` et `c`.
