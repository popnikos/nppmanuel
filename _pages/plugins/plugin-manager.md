---
layout: default
title: Plugin manager
plugin_desc: Gestionnaire de plugins
plugin_date: 2009
---
Ce [plugin](../plugins.md) est un gestionnaire de plugins. Il permet d'installer, supprimer et mettre à jour en quelques clics les plugins disponibles pour [Notepad++](../notepad++.md). Créé et développé depuis 2009 par Dave Brotherstone, il était proposé par défaut dans Notepad++ de 2009 à 2017.

L'inclusion en [septembre 2016](https://github.com/bruderstein/nppPluginManager/commit/63af96b59e7105047790bed016b71d2dd709dd55) d'une publicité pour le sponsor hébergeant la liste de plugins (voir l'explication par l'auteur [Plugin Manager Sponsoring](https://bruderste.in/npp/pm/sponsor/)) a entraîné son retrait des plugins inclus par défaut à partir d'août 2017 et de la [version 7.5](../historique-des-versions.md). Un gestionnaire de plugins natif a commencé à être développé sous le nom de *Plugin Admin* (voir [commits](https://github.com/notepad-plus-plus/notepad-plus-plus/search?q=Plugin+Admin&type=Commits&utf8=%E2%9C%93)).

Les sources du plugin, releases et informations sont disponibles sur le [projet GitHub](https://github.com/davegb3/nppPluginManager).

## Installation

Depuis la [version 7.5](historique-des-versions.md) le Plugin Manager n'est plus inclus par défaut et doit être téléchargé et installé manuellement :

[Télécharger la dernière version](https://github.com/bruderstein/nppPluginManager/releases){:.btn-call}

Décompresser l'archive, et copier son contenu (`plugins/PluginManager.dll` et `updater/gpup.exe`) dans le répertoire d'installation de Notepad++. Par exemple à l'adresse :

    C:\Program Files\Notepad++

Relancer Notepad++.

> A noter qu'il est aussi possible d’installer le Plugin Manager à partir de lui-même en n'ajoutant préalablement que le fichier `dll` au dossier `plugins` !

## Interface

Pour afficher la fenêtre, utiliser le menu *Compléments -> Plugin Manager -> Show Plugin Manager*.

![La fenêtre du Plugin Manager](/images/plugins/pluginmanager/npp_plugin_pluginmanager.png)

### Available

Le premier onglet liste les plugins existants, et permet de les installer.

### Updates

Le deuxième onglet indique les mises à jour de plugins existantes.

### Installed

Le troisième onglet liste les plugins installés et permet de les supprimer ou de les réinstaller.

## Options

![Paramètres du Plugin Manager](/images/plugins/pluginmanager/npp_plugin_pluginmanager_settings.png)

La fenêtre d'options est accessible depuis le bouton *Settings* en bas du Plugin Manager.

- `Notify of plugin updates at startup` active la recherche de mises à jour de plugins au démarrage de Notepad++, et le cas échéant affiche un message.
- `Show unstable plugins` permet d'ajouter les plugins en cours de développement ou instables à la liste de plugins disponibles.
