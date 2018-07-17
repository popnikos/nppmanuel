---
order: 3
---
# Syntaxe des motifs de remplacement

Dans un motif de remplacement, tout caractère se désigne lui-même.

Par exemple, en remplacant `o` par `.tomate.` dans `bonjour`, on obtiendra :

    b.tomate.nj.tomate.ur

Le motif de remplacement permet de faire référence à certains éléments *capturés* par le motif de recherche, ce qui donne au remplacement toute la puissance des expressions régulières. N'importe quel chiffre entre zéro et neuf, échappé, désigne le résultat d'un groupe du motif de recherche. C'est pour cela qu'on parle de *parenthèses capturantes*.

    \0 \1 \2 \3 \4 \5 \6 \7 \8 \9

Le premier, `\0`, correspond au motif lui-même, entier, et les suivants aux sous-motifs. Les sous-motifs sont numérotés par ordre de parenthèse ouvrante.

Par exemple, dans le motif de recherche `(a(bc))(de)`, `\0` correspond à `abcde`, `\1` désigne `abc`, `\2` désigne `bc` et `\3` désigne `de`.
