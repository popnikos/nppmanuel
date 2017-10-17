---
layout: plugins
title: Plugins
pluginlist:
    texts:
        plug: Plugin
        desc: Description
        date: Création
---
Un plugin, ou complément, est un petit programme distinct, généralement créé par un tiers ou un groupe de bénévoles, qui se rajoute au logiciel principal afin d'étendre ses fonctionnalités. Il en existe plus d'une centaine pour Notepad++, listés sur la page [Plugin Central](http://docs.notepad-plus-plus.org/index.php?title=Plugin_Central) du wiki officiel (en anglais).

> Depuis la [version 7.5](historique-des-versions.md) le gestionnaire de plugins [Plugin Manager](plugins/plugin-manager.md) n'est plus inclus par défaut. Jusqu'à ce qu'il soit réintégré ou qu'un gestionnaire de plugins officiel soit développé, il peut être installé manuellement.

Quelques plugins sont disponibles par défaut si l'option a été laissée cochée lors de l'[installation](installation.md). Certains plugins peuvent ne pas être disponible pour la version 64-bits de Notepad++.

<!-- pluginlist -->

## Installation manuelle

> S'il est déjà installé, l'installation de plugins peut se faire directement dans Notepad++ par le biais du [Plugin manager](plugins/plugin-manager.md). Se référer en priorité - si elles existent - aux instructions des plugins.

Télécharger et décompresser l'archive du plugin.

Elle contiens au minimum un ou plusieurs fichiers `.dll` qui doivent être placé dans le répertoire `plugins` de votre installation de Notepad++. Par exemple à l'adresse :

    C:\Program Files\Notepad++\plugins

Elle contiens parfois un dossier `Config` dont le contenu doit être placé à l'adresse :

- Pour Windows 7 : `Users\username\AppData\Roaming\Notepad++\plugins\config`
- Pour Windows XP : `document and setting\username\application data\Notepad++\plugins\config`

Pour finir, relancer Notepad++.
