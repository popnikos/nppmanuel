---
layout: default
title: Plugin manager
---
# Plugin manager

Ce [plugin](../plugins.md) est un gestionnaire de plugins. Il permet d'installer, supprimer et mettre à jour en quelques clics les plugins disponibles pour [Notepad++](../notepad++.md).

Créé par Dave Brotherstone, il était proposé par défaut dans Notepad++ de 2009 à 2017 ([versions 5.5 à 7.5](../historique-des-versions.md)).

- [Page sur le site de l'auteur](http://brotherstone.co.uk/npp/pm)
- [Sources sur GitHub](https://github.com/davegb3/nppPluginManager)

## Installation

Depuis la [version 7.5](historique-des-versions.md) le Plugin Manager n'est plus inclus par défaut et doit être installé manuellement.

> 1. [Télécharger la dernière version](https://github.com/bruderstein/nppPluginManager/releases)
> 1. [Installer le plugin manuellement](../plugins.md#installation-manuelle).

A noter qu'il est aussi possible, en plus d'une [installation manuelle classique](../plugins.md#installation-manuelle), d’installer le Plugin Manager à partir de lui-même en n'ajoutant préalablement que le fichier `dll` au dossier `plugins` !

## Interface

Pour afficher la fenêtre, utiliser le menu *Compléments -> Plugin Manager -> Show Plugin Manager*.

![La fenêtre du Plugin Manager](/images/plugins/plugin-manager.png)

### Available

Le premier onglet liste les plugins existants, et permet de les installer.

### Updates

Le deuxième onglet indique les mises à jour de plugins existantes.

### Installed

Le troisième onglet liste les plugins installés et permet de les supprimer ou de les réinstaller.

## Options

La fenêtre d'options est accessible depuis le bouton *Settings* en bas du Plugin Manager.

- `Proxy address`
- `Proxy port`
- `Notify of plugin updates at startup` active la recherche de mises à jour de plugins au démarrage de Notepad++, et le cas échéant affiche un message.
- `Show unstable plugins` permet d'ajouter les plugins en cours de développement ou instables à la liste de plugins disponibles.
