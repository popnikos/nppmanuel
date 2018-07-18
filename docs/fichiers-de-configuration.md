# Fichiers de configuration

Les paramètres de l'application sont enregistrés dans le dossier *Application Data* de windows, dans un sous-dossier au nom de [Notepad++](notepad-plus-plus.md). Pour ouvrir ce dossier, il suffit de rentrer dans la barre d'adresse de l'explorateur de fichier, ou dans la barre de recherche de Windows :

    %APPDATA%/Notepad++

Cette variable correspond aux addresses :

    Depuis Windows Vista :	C:\Users\<utilisateur>\AppData\Roaming
    Sous Windows XP :	C:\Documents and Settings\<utilisateur>\Application Data

::: tip Astuce
Pour les utilisateurs de [Notepad++ sous Linux/Wine](installation-sous-linux.md), `C:` se trouve à `home/user/.wine/dosdevices`
:::

Ce dossier comprend un certain nombre de fichiers de configuration, dans un format `.xml` ou `.ini`. Ces fichiers changent légèrement au fil des versions, des nouveaux plugins et nouvelles fonctionnalités.

- `plugins/config/` : données des [plugins](plugins.md)
- `themes/` : liste des fichiers de [Thèmes](Themes.md).
- `config.xml` : fichier de sauvegarde des [Préférences](preferences.md).
- `contextMenu.xml` : fichier de configuration du menu contextuel.
- `functionList.xml` : fichier de configuration de la [Liste des fonctions](liste-des-fontions.md).
- `langs.xml` : liste des mots clés pour les traductions.
- `nativeLang.xml` : fichier de traduction.
- `session.xml` : fichier de sauvegarde de la dernière session.
- `shortcuts.xml` : fichier de configuration des [macros](macros.md) et [raccourcis clavier](raccourcis-clavier.md)
- `stylers.xml` : fichier de thème par défaut.

Les fichiers de configuration peuvent être modifiés manuellement, c'est même le seul moyen de faire certains réglages poussés. Ils doivent par contre être édités au moyen d'un autre logiciel, Notepad++ écrase ses fichiers de configuration à sa fermeture.
