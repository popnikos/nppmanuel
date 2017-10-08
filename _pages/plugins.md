---
layout: default
chapitre: 4
order: 3
---
# Plugins

Un plugin, ou complément, est un petit programme distinct, généralement créé par un tiers ou un groupe de bénévoles, qui se rajoute au logiciel principal afin d'étendre ses fonctionnalités. Il en existe plus d'une centaine pour Notepad++, directement gérés au sein du logiciel par le [Plugin manager](plugin-manager.md), listés sur la page [Plugin Central](http://sourceforge.net/apps/mediawiki/notepad-plus/index.php?title=Plugin_Central) du wiki anglophone et souvent disponibles par le projet Sourceforge [npp-plugins](http://sourceforge.net/projects/npp-plugins/files).

- [Plugin Manager](plugin-manager.md) : Gestionnaire de plugins

Le Plugin Manager et quelques autres plugins particulièrement utiles sont disponibles par défaut dans Notepad++ si l'option a été laissée cochée lors de l' [installation](installation.md). Dans le cas contraire il faudra procéder à l'installation manuelle du Plugin Manager.

- [DSpellCheck](plugin-dspellcheck.md) : Correcteur orthographique
- [NppFTP](plugin-nppftp.md) : Client FTP
- [NppExport](plugin-nppexport.md) : Export ou copie WYSIWYG
- [Converter](plugin-converter.md) :
- [Auto Save](plugin-auto-save.md) : Sauvegarde automatique
- [Compare](plugin-compare.md) : Comparaison de fichiers
- [Explorer](plugin-explorer.md) : Explorateur de fichiers
- [Function List](plugin-function-list.md) : Liste des fonctions
- [RegEX Helper](plugin-regex-Helper.md) : Aide à la recherche par expressions régulières
- [SourceCookifier](plugin-sourcecookifier.md) : Liste des éléments du code
- [Spell-Checker](plugin-spell-checker.md) : Correcteur orthographique
- [Emmet](plugin-emmet.md) : Création rapide de structures html/css

Un plugin en particulier a été intégré directement au logiciel, après des années de loyaux services :

- [TextFX](plugin-textfx.md) : Outils d'édition

## Installation manuelle

L'installation de plugins supplémentaires se fait directement dans Notepad++, par le biais du [Plugin manager](plugin-manager.md), mais dans des cas très particuliers il est possible de procéder à une installation manuelle. Se référer en priorité - si elles existent - aux instructions du plugin.

Décompresser l'archive du plugin.

Elle contiens au minimum un ou plusieurs fichiers `.dll` qui doivent être placé dans le répertoire `plugins` de votre installation de Notepad++. Par exemple à l'adresse :

    C:\Program Files\Notepad++\plugins

Elle contiens parfois un dossier `Config` dont le contenu doit être placé à l'adresse :

- Pour Windows 7 : `Users\username\AppData\Roaming\Notepad++\plugins\config`
- Pour Windows XP : `document and setting\username\application data\Notepad++\plugins\config`

Pour finir, relancer Notepad++.
