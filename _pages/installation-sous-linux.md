---
layout: default
title: Installation sous Linux
---
[Notepad++](notepad++.md) est intrinsèquement lié à Windows : il n'existe pas — et n'existera jamais — de version pour Linux. Il existe de nombreuses [alternatives](alternatives.md) qu'il est largement recommandé d'utiliser.

Il est toutefois possible, en cas d'addiction au logiciel caméléon, de le faire fonctionner sous Linux au moyen du logiciel [Wine](http://winehq.org), qui simule un environnement Windows sous Linux.

## Installer Wine

Par exemple sous Debian/Ubuntu, en ligne de commande :

```bash
sudo apt-get install wine
```

## Installer Notepad++

[Télécharger l'installeur](telecharger.md), lui appliquer des droits d'exécution et le lancer avec Wine :

```bash
chmod +x nomDuFichier.exe
wine nomDuFichier.exe
```

Installez Notepad++ comme si vous étiez sous Windows.

## Lancer le logiciel

Une fois installé, Notepad++ est manipulable en lignes de commandes.

Pour l'ouvrir :

```bash
wine "C:\Program Files\Notepad++\notepad++.exe"
```

Vous pouvez créer un alias pour raccourcir cette commande, par exemple `npp`, vous créer un raccourci, ou l'attribuer comme commande par défaut à un type de fichier.

## Limitations

Ces problèmes ont été rencontrés lors de l'utilisation de Notepad++ 5.8 avec Ubuntu 10.04 et Wine 1.1.42. Bien que ces problèmes aient pu se résoudre d'eux même avec de nouvelles versions, ils servent de rappel au fait que le logiciel risque de ne pas fonctionner de façon optimale.

Dans la fenêtre de préférences, les valeurs numériques ne peuvent être modifiées.

Lorsque le commutateur de document est activé, l'utilisation de <kbd>Ctrl</kbd>+<kbd>Tab</kbd> ouvre la liste dans une fenêtre fixe, qui ne peut-être fermée qu'avec la sélection d'un élément de la liste à la souris.
