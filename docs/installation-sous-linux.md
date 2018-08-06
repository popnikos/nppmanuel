# Notepad++ sous Linux

[Notepad++](notepad-plus-plus.md) est intrinsèquement lié à Windows : il n'existe pas — et n'existera jamais — de version native pour Linux.

## Alternatives

Il existe de nombreuses [alternatives](alternatives.md) multi-plateformes ou natives aux distributions GNU/Linux qui recouvrent une partie des fonctionnalités de Notepad++.

## Notepad++ avec Wine

Il est possible, en cas d'addiction au logiciel caméléon, de le faire fonctionner sous Linux au moyen du logiciel [Wine](http://winehq.org), qui simule un environnement Windows.

::: warning Attention

N'étant pas installé nativement, le logiciel peut ne pas fonctionner de façon optimale. Pour exemple, les problèmes suivants ont été rencontrés lors de l'utilisation de Notepad++ 5.8 avec Ubuntu 10.04 et Wine 1.1.42 :

- Dans la fenêtre de préférences, les valeurs numériques ne peuvent être modifiées.
- Lorsque le commutateur de document est activé, l'utilisation de <kbd>Ctrl</kbd>+<kbd>Tab</kbd> ouvre la liste dans une fenêtre fixe, qui ne peut-être fermée qu'avec la sélection d'un élément de la liste à la souris.

:::

### Installation avec [snapd](https://snapcraft.io)

Le snap suivant installe Notepad++ sous Wine :

<https://github.com/mmtrt/notepad-plus-plus>

```bash
sudo snap install notepad-plus-plus
```

### Installation manuelle

Installer [Wine](http://winehq.org). Par exemple sous Debian/Ubuntu, en ligne de commande :

```bash
sudo apt-get install wine
```

Télécharger l'[installeur de Notepad++](telechargement.md), lui appliquer des droits d'exécution et le lancer avec Wine (remplacer par le nom du fichier) :

```bash
chmod +x npp.x.x.x.Installer.exe
wine npp.x.x.x.Installer.exe
```

Suivez les étapes d'[installation](installation.md) comme si vous étiez sous Windows, et Notepad++ est ensuite manipulable en ligne de commande. Pour l'ouvrir :

```bash
wine "C:\Program Files\Notepad++\notepad++.exe"
```

Vous pouvez créer un alias pour raccourcir cette commande, par exemple `npp`, vous créer un raccourci, ou l'attribuer comme commande par défaut à un type de fichier.