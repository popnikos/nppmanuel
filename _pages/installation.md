---
layout: default
chapitre: 1
order: 2
---
# Installation

Le processus d'installation à partir de [l'installeur](téléchargement.md) se résume en deux étapes :

1. Lancer l'exécutable
1. Cliquer frénétiquement sur le bouton "Suivant"

Notepad++ n'installera pas de logiciels tiers ou de bandeaux publicitaires. Ainsi, pour la version courte, il suffit de faire confiance aux différents écrans d'installation, sans rien changer, jusqu'à ce que le logiciel se lance.

## Détails de l'installation

Lancer l'exécutable.

![Le choix du langage lors de l'installation de Notepad++](/images/installation/01_language.png)

Choisir la langue qui vous convient pour afficher l'écran d’accueil de l'installateur.

### Une licence libre

![Le choix de la licence lors de l'installation de Notepad++](/images/installation/03_licence.png)

Notepad++ est un logiciel libre sous [licence GNU GPL](https://fr.wikipedia.org/wiki/Licence_publique_g%C3%A9n%C3%A9rale_GNU) créé et principalement développé par Don Ho. En acceptant cette licence vous acceptez d'être autorisé, librement et gratuitement, à faire n'importe quel usage du logiciel, à le partager, ou même le modifier.

### Le dossier d'installation

![Le choix du dossier d'installation lors de l'installation de Notepad++](/images/installation/04_directory.png)

Notepad++ pèse moins de 20Mo en version tout option. C'est suffisamment léger pour pouvoir être installé n'importe où : s'il est par défaut installé dans *Program Files*, il peut aussi être installé sur un support amovible ou synchronisé, comme le permet une option indiquée un peu plus loin.

### Les composants

![Le choix du dossier d'installation lors de l'installation de Notepad++](/images/installation/05_components.png)

Choisir quels composants installer permet d'omettre des fonctionnalités non désirées et d'optimiser l'espace occupé.

- `Context Menu Entry` ajoute une option indispensable *Ouvrir avec Notepad++* au clic droit sur un fichier dans Windows.
- `Auto-completion Files` permet l'auto-complétion de termes et fonctions propres à chaque language.
- `Plugins` installe les plugins proposés par défaut.
- `Localization` installe les langues de l'interface. La langue choisie précédemment est  déjà sélectionnée.
- `Themes` installe les thèmes proposés par défaut.
- `As default html viewer` utilise Notepad++ pour afficher la source d'une page avec Internet Explorer.
- `Auto-Updater` active le système de mise à jour automatique.
- `User Manual` intègre la documentation (anglais), accessible en html dans le dossier manual du répertoire d'installation.

### Les options

![Le choix des options lors de l'installation de Notepad++](/images/installation/06_options.png)

- `Don't use %APPDATA%` place les fichiers de configuration dans le répertoire d'installation, au lieu du répertoire de Windows dédié. Le logiciel deviens complètement séparé du système  d'exploitation : on dit qu'il est portable et peut être déplacé, installé sur un support amovible (clé USB, etc.) ou un répertoire synchronisé (Dropbox, etc.). Ce type de configuration permet de conserver son environnement de travail entre différents ordinateurs sans aucun accroc.
- `Allow plugins to be loaded from notepad++/plugins` permet d'installer des plugins manuellement, sans passer par le gestionnaire de plugins intégré, en les copiant directement dans le répertoire indiqué.
- `Create shortcut on Desktop` crée un raccourci sur le bureau.
- `Use the old obsolete and monstruous icon` remplace la nouvelle icône npp_icon_new par l'ancienne npp_icon_old. Vous pouvez le faire. Ce n'est pas obligatoire, mais vous pouvez le faire.

### L'installation

![L'écran de chargement de l'installation de Notepad++](/images/installation/07_loading.png)
![L'écran de fin de l'installation de Notepad++](/images/installation/08_end.png)

L'installation à proprement parler ne prendra généralement que quelques secondes.

Notepad++ est installé, il ne reste plus qu'à le lancer et découvrir [l'interface](interface.md).
