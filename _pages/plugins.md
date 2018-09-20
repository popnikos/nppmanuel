---
layout: default
title: Plugins
pluginlist:
    texts:
        plug: Plugin
        desc: Description
        date: Création
---
Un plugin, ou complément, est un petit programme distinct, généralement créé par un tiers ou un groupe de bénévoles, qui se rajoute au logiciel principal afin d'étendre ses fonctionnalités. Il en existe plus d'une centaine pour Notepad++, listés sur la page [Plugin Central](http://docs.notepad-plus-plus.org/index.php?title=Plugin_Central) du wiki officiel (en anglais).

> Depuis la [version 7.5](historique-des-versions.md) le gestionnaire de plugins [Plugin Manager](plugins/plugin-manager.md) n'est plus inclut par défaut. Jusqu'à ce qu'il soit réintégré ou qu'un gestionnaire de plugins officiel soit développé, il peut être installé manuellement.

## Liste des plugins

Certains de ces plugins sont disponibles par défaut si l'option a été laissée cochée lors de l'[installation](installation.md). Certains peuvent ne pas être disponible pour la version 64-bits de Notepad++.

<!-- pluginlist -->

## Installation manuelle

> L'installation d'un plugin peut se faire directement par le biais du [Plugin manager](plugins/plugin-manager.md), s'il est lui même installé.

Se réferer à la page du plugin pour télécharger la dernière version et suivre (si elles existent) les instructions d'installation manuelle.

Ces instructions consistent généralement à placer le ou les fichiers `.dll` contenus dans l'archive du plugin dans le répertoire `plugins` du répertoire d'installation de Notepad++ :

    C:\Program Files\Notepad++\plugins

L'archive contient parfois un dossier `Config` dont le contenu doit être placé à l'adresse :

    %APPDATA%\Notepad++\plugins\config

Pour finir, relancer Notepad++.

## Installation (Ubuntu 18.04)
Si vous avez installer Notepad plus plus via `snap` il faut extraire le zip dans `~/snap/notepad-plus-plus/current/notepad-plus-plus/plugins/[Nom du plugin]`.

Si le plugin contient un dossier `Config`, extraire le contenu de ce répertoire dans `~/snap/notepad-plus-plus/current/notepad-plus-plus/plugins`

Veillez également pour les autres dossiers dans le zip à vérifier si des fichiers doivent être copiés dans des endroit spécifiques
