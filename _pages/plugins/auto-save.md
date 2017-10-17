---
layout: default
title: Auto Save
plugin_desc: Enregistrement automatique
plugin_date: 2007
---
Ce [plugin](../plugins.md) permet un enregistrement automatique des fichiers ouverts dans [Notepad++](../notepad++.md) avec un intervalle de temps prédéfini ou lors d'une perte de focus.

Page du développeur : <http://sites.google.com/site/fstellari2/npp_plugins>

## Installation

> Notepad++ intègre nativement des fonctions de sauvegarde périodique et incrémentale dans les [préférences de sauvegarde](../preferences/sauvegarde.md) qui recouvrent les fonctionnalités de ce plugin.

Il peut être installé ou désinstallé simplement depuis le [Plugin Manager](plugin-manager.md).

L'enregistrement automatique doit être activé dans les options du plugin.

## Options

Les options sont accessibles par : *Compléments -> Auto Save -> Options...*.

### Auto Save when

Indiquez ici **quand** enregistrer. Cocher une de ces options déclenchera l'enregistrement automatique, les décocher le désactivera.

- *Notepad++ loses focus* : enregistrer quand la fenêtre du logiciel perd le focus.
- *At timed intervals every x minutes* : enregistrer toutes les x minutes.

Ces deux options peuvent se combiner, afin d'enregistrer toutes les x minutes à partir du moment où le logiciel perd le focus.

### Auto Save what

Indiquez ici **quoi** enregistrer.

- *Curent file only* : le fichier actif uniquement.
- *All open files* : tous les fichiers ouverts (par défaut).

### Named files

Indiquez ici que faire des fichiers déjà enregistrés.

- *Ignore/do nothing* : ne rien faire.
- *Overwrite existing file* : écrase le fichier existant (par défaut).
- *Save autorecover in the same directory* : enregistre un fichier de sauvegarde au même emplacement.

Utiliser conjointement *Overwrite existing file* et les options de sauvegarde des [Préférences](preferences.md) de Notepad++ permet plus de contrôle que l'option *Save autorecover in the same directory* du plugin.

### Unnamed/new files

Indiquez ici que faire des nouveaux fichiers jamais enregistrés.

- *Ignore/do nothing* : ne rien faire (par défaut).
- *Ask for filename* : demande où les enregistrer.
- *Save (overwrite) silently here* : enregistre (et écrase si nécessaire) le fichier à un emplacement donné sans poser de question.
- *Save autorecover here* : enregistre un fichier de sauvegarde à un emplacement donné.

Utiliser conjointement *Save (overwrite) silently here* et les options de sauvegarde des [Préférences](preferences.md) de Notepad++ permet plus de contrôle que l'option *Save autorecover here* du plugin.
