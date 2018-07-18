---

title: Arrondir des valeurs
---
Comment arrondir des valeurs numériques dans un fichier au moyen d'un éditeur de texte comme [Notepad++](notepad-plus-plus.md) ?

Les [recherches et remplacements](recherches-et-remplacements.md) ne permettent pas d'opérations proprement conditionnelles : un éditeur de texte n'est pas d'un interpréteur ou un compilateur et ne traite pas des opérations mathématiques. Il est donc, de manière générale, impossible d'arrondir automatiquement et facilement des valeurs dans un éditeur de texte.

La méthode suivante permet d'arrondir toute valeur positive à l'unité la plus proche. Elle nécessite toutefois un grand nombre d'opérations, augmentant avec la taille des valeurs :

- valeurs comprises entre 0 et 9.9999... : 11 remplacements
- valeurs comprises entre 0 et 99.999... : 21 remplacements
- valeurs comprises entre 0 et 999.99... : 31 remplacements

Il est donc très vite plus intéressant de faire appel à un langage de programmation.

## Avec des [expressions régulières](expressions-regulieres.md)

On prendra pour exemple la série suivante :

    0.0  58.256  982.498
    4.5  98.663  506.942
    19.6  59.701  189.842

D'abord, arrondir les valeurs dont la première décimale est inférieure à 5 correspond à en supprimer les décimales. On recherchera donc :

```regex
([0-9]+)[.,][0-4][0-9]*
```

Pour n'en garder que la valeur entière :

```regex
\1
```

    0    58      982        (première décimale inférieure à 5)
    4.5  98.663  506.942
    19.6  59.701  189.842


Ensuite, les valeurs dont la première décimale est comprise entre 5 et 9 doivent être augmentées de un : l'arrondi de 12.71 est 13.

Les valeurs dont le chiffre des unités est inférieur à 9 n'influeront pas le chiffre des dizaines. On peut donc déterminer neuf remplacements à effectuer afin de remplacer le chiffre des unités en conservant les chiffres précédents :

```regex
([0-9]*)0[.,][5-9][0-9]* remplacé par \11
([0-9]*)1[.,][5-9][0-9]* remplacé par \12
([0-9]*)2[.,][5-9][0-9]* remplacé par \13
([0-9]*)3[.,][5-9][0-9]* remplacé par \14
([0-9]*)4[.,][5-9][0-9]* remplacé par \15
([0-9]*)5[.,][5-9][0-9]* remplacé par \16
([0-9]*)6[.,][5-9][0-9]* remplacé par \17
([0-9]*)7[.,][5-9][0-9]* remplacé par \18
([0-9]*)8[.,][5-9][0-9]* remplacé par \19
```

    0    58      982
    5    99      507         (chiffre des unités inférieur à 9)
    19.6  59.701  189.842

Il ne reste à ce stade plus que les valeurs avec une unité de 9, dont le remplacement doit influer sur les chiffres des dizaines.

Les remplacer demande alors de reprendre le raisonnement précédent : neuf remplacements pour les dizaines comprises entre 0 et 8 en mettant le chiffre des unités à 0.

```regex
([0-9]*)09[.,][5-9][0-9]* remplacé par \110
([0-9]*)19[.,][5-9][0-9]* remplacé par \120
...
```

    0    58      982
    5    99      507
    20    60      190        (chiffre des dizaines inférieur à 9)

Et l'on recommence les neuf opérations pour les dizaines égales à 9, puis pour les centaines, etc, etc...
