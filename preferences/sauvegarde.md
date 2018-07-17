---
order: 10
---

# Sauvegarde

[Préférences](../preferences.md) de sauvegardes automatiques et préventives des fichiers dans [Notepad++](../notepad++.md).

![Interface](./images/npp_settings_save.png)

## Sauvegarde périodique

Effectuer des sauvegardes périodiques automatiques de l'état de la session et du fichier courant.

En cas d'erreur, un backup des fichiers ouverts se trouvera à l'emplacement indiqué, par défaut :

    %APPDATA%\Notepad++\backup\

## Sauvegarde incrémentale

Conserver une ou plusieurs sauvegarde antérieure des fichiers à chaque enregistrement.

Type|Description
--|--
|*Aucune*|Seule la dernière version du fichier est conservée|
|*Simple*|À chaque sauvegarde, la version précédente est enregistrée avec le nom `fichier.ext.bak`. Il existe ainsi deux versions du fichier : l'actuelle et la précédente.
|*Détaillée*|À chaque sauvegarde, la version précédente d'un fichier est enregistrée dans un dossier `nppBackup` avec le nom `fichier.ext.date_heure.bak`. Il existe autant de versions du fichier que d'enregistrements.

Par défaut, les versions de sauvegarde sont enregistrées à côté du fichier manipulé. *Dossier spécifique* permet d'indiquer un emplacement unique où stocker les sauvegardes de tous les fichier.
