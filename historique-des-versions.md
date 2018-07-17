# Historique des versions

[Notepad++](notepad-plus-plus.md) est développé de façon constante depuis près de 15 ans, au rythme d'une version mineure tous les quelques mois (qui amène de nouvelles améliorations ou fonctionnalités) et de versions correctives pratiquement tous les mois.

Cette liste recense les changements principaux d'un point de vue utilisateur. Il s'agit d'une traduction des *changelogs* officiels, épurés des corrections de bugs et des informations concernant uniquement le cœur du logiciel.

<https://notepad-plus-plus.org/fr/download/all-versions.html>

## Version 7

La septième version majeure de Notepad++ est la version courante, développée depuis 2016.

### version 7.5 - août 2017

- Support de 20 langages additionnels : ASN.1, AviSynth, Blitz Basic, Csound, Erlang, escript, Forth, FreeBASIC, LaTeX, MMIX, Nimrod, nnCron, OScript, PureBasic, Rebol, registry, Rust, SPICE, txt2tags et Visual Prolog.
- Le [Plugin Manager](plugins/plugin-manager.md) est retiré des plugins par défaut, un gestionnaire de plugins intégré est en développement.
- Ajout de la fonction d'ouverture d'un fichier dans son application par défaut.
- Ajout de l'option de ligne de commande *-quickPrint* pour ouvrir le logicier, imprimer et quitter.
- Les champs vides des fenêtres de [recherche et remplacement](recherches-remplacements.md) sont conservés entre deux sessions.
- Support de l'auto-complétion pour les fichiers bat.
- Le [Shortcut Mapper](shortcut-mapper.md) affiche une colonne de catégorie.

### version 7.4 - mai 2017

- Ajout de l'[aperçu de document](document-peeker.md) ayu survol d'un onglet ou du plan du document, et de son option dans les [préférences diverses](preferences/divers.md).
- Support du langage SWIFT

### version 7.3 - janvier 2017

- Ajout de la fonction de génération de hash MD5, permettant de générer un hash MD5 à partir de texte ou de fichiers.
- Amélioration de la sélection de mots, permettant d'inclure d'autres caractères à la définition des mots pour changer le comportement par défaut de la sélection au double clic ou de la recherche avec l'option *Mots entiers uniquement*.
- Support du langage BaanC et des formats héxadécimaux Motorola S-Record, Intel en Tektronix
- Ajout d'un raccourci pour rechercher dans la direction opposée dans la fenêtre de recherche.

### version 7 à 7.2 - septembre à novembre 2016

- Ajout d'une version 64-bit (x64). La plupart des [plugins](plugins.md), dont le [Plugin Manager](plugins/plugin-manager.md) sont encore incompatibles.
- Détection des conflits de raccourcis clavier dans le [Shortcut Mapper](shortcut-mapper.md).
- Ajout d'une option pour fermer le logiciel au dernier onglet fermé.
- Ajout d'une option pour faire défiler la page après la fin du texte.
- Ajout de nouveaux types de conversion de casse de caractères : De Titre, De phrase, iNVERSE, aLéAToiRe.
- Possibilité d'ouvrir le chemin de fichier sélectionné dans un texte.
- Possibilité de chercher le texte sélectionné sur internet.
- La barre d'onglets peut être défilée avec la molette de la souris.
- La [Liste des fonctions](liste-des-fonctions.md) supporte le langage Ruby.
- Ajout d'une option pour ouvrir tous les fichiers contenus dans le dossier déposé sur la fenêtre au lieu de l'ajouter au [Dossier de travail](folder-as-workspace.md).
- Le surlignage intelligent peut s'étendre à l'autre vue ouverte.

## Version 6

La sixième version majeure de Notepad++ a été développée et distribuée entre 2012 et 2016. Elle est principalement caractérisée par le support complet des [expressions régulières](expressions-regulieres.md) (PCRE), l'intégration d'une [Liste des fonctions](liste-des-fonctions.md), de dossiers de travail et la sauvegarde des sessions.

### version 6.9 - février 2016

- Ajout de la fonction de [Dossier de travail](folder-as-workspace.md).
- Ajout de la fonction de [Monitoring](monitoring.md) pour la lecture de fichiers de log.
- Ajout de la fonction de sous-recherche à partir d'une recherche dans un dossier.
- Support du langage FORTRAN 77

### version 6.8 - juillet 2015

- Support du langage JSON.
- Auto-détection du langage à partir du contenu du fichier pour PHP, XML, HTML et bash en cas d'extension inconnue.
- Amélioration de l'insertion automatique : l'ajout des caractères fermants dépend du contexte.
- Possibilité de renseigner n'importe quel répertoire pour la synchronisation des [préférences](preferences.md).
- Les bordures de l'éditeur peuvent être cachées.
- Ajout du *Debug Info Helper* pour les rapports de bug.

### version 6.7 - décembre 2014

- Indentation intelligente pour les langages de type C : PHP, Javascript, C, C++, Java, C# et Objective-C. L'option peut être désactivée dans les [préférences diverses](preferences/divers.md).
- Support des guillemets doubles et simples pour l'insertion automatique, en plus des parenthèses et crochets fermants.
- Amélioration de l'insertion automatique : évite d'ajouter un caractère en double si l'utilisateur l'entre manuellement.
- Ajout de la fonction cachée d'[écriture fantôme](ghost-typing.md) permettant de lancer le logiciel avec un texte s'écrivant automatiquement.
- Ajout de la fonction de réouverture du dernier fichier fermé et de son [raccourci clavier](raccourcis-clavier.md).
- Le projet de développement est migré sur [Github](https://github.com/notepad-plus-plus/notepad-plus-plus).
- Une instance administrateur du logiciel s'ouvre automatiquement pour enregistrer un fichier protégé.

### version 6.6 - mai 2014

- La sauvegarde de session permet de conserver l'état de la session à la fermeture de Notepad++ pour retrouver les fichiers en cours d'édition au lancement suivant, sécurisant au passage les pertes de données accidentelles. La fonction peut être activée/désactivée via les préférences ou une option de ligne de commande, et il est possible de paramétrer la fréquence et l'emplacement des sauvegardes de sessions.
- Les paramètres du logiciel peuvent être enregistrés et centralisés via un compte Dropbox, Microsoft OneDrive ou Google Drive.
- Les couleurs de fond des thèmes s'appliquent aux diverses boites de dialogues.
- La [Liste des fonctions](liste-des-fonctions.md) intègre le language python.

### version 6.5 - septembre 2013

- La [Liste des fonctions](liste-des-fonctions.md) intègre les langages php, java, perl, xml, batch, ini, nsis ainsi que les langages utilisateurs. Son panneau se dote d'un champ de recherche, d'une fonction de tri et d'un bouton de rechargement.
- L'Insertion automatique permet de fermer automatiquement pendant la frappe les parenthèses, guillemets, crochets, accolades et balises xml/html, ou des paires définies par l'utilisateur. Ces nouvelles options apparaissent dans les préférences, catégorie Autocomplétion.
- Le Collage multiple permet, en sélection multiple ou mode colonne, de coller en une fois à tous les emplacements du curseur un texte précédemment copié.
- Support du langage CoffeeScript.
- Apparition de deux options supplémentaires pour marquer les recherches : respecter la casse ou marquer les mots entiers uniquement.
- Si le logiciel est lancé en administrateur l'information est désormais notée sur la barre de titre.

### version 6.4 - juin 2013

- Introduction de la [Liste des fonctions](liste-des-fonctions.md), limité aux languages C/C++ et Javascript.
- La fenêtre de [recherches et remplacements](recherches-remplacements.md) comprend désormais une barre d'état qui affiche directement les messages d'erreurs et résultats.
- Les macros peuvent enregistrer les recherches et remplacements.
- Amélioration de l'interface des préférences, une liste remplace les onglets.
- Possibilité de sélectionner un contenu entre deux délimiteurs définis dans les préférences avec Ctrl + Double clic.
- Ajout d'options pour ouvrir les session dans une nouvelle instance de Notepad++.
- Ajout des options de fermeture de tous les onglets à droite ou à gauche.
- Possibilité d'accéder directement à un onglet au clavier avec Ctrl + numéro.
- ossibilité d'insérer une ligne vide au dessus ou au dessous de la ligne courante.

### version 6.3 - février 2013

- Ajout d'un système de versionning pour les langages utilisateurs.
- Les repli de codes sont mémorisés entre deux sessions.
- Plusieurs fichiers peuvent être sélectionnés à la fois dans le panneau des Documents.
- La correction orthographique est désormais gérée par le plugin DSpellCheck.

### version 6.2 - octobre 2012

- Intégration d'UDL 2.0, amélioration de la définition de langages personnalisés.
- Affichage du nombre de lignes sélectionnées dans la barre d'état.
- Ajout de la fonction d'édition "Enlever les lignes vides".
- Les documents utilisent par défaut l'encodage UTF8 sans BOM, au lieu d'ANSI.

### version 6.1 - avril 2012

- Possibilité de respecter la casse pour l'option de colorisation "Smart highlighting"
- Détection automatique des mises à jours.
- Ajout d'un avertissement lors de l'ouverture d'un grand nombre de fichiers.

### version 6.0 - mars 2012

- Support des [expressions régulières](expressions-regulieres.md) PCRE.
- Ajout de la "Document Map".

## Version 5

La cinquième version majeure de Notepad++ a été développée et distribuée entre 2008 et 2011. Elle est principalement caractérisée par l'intégration du gestionnaire de plugins et d'une gestion de projets.

### version 5.9 - juin 2011

- Ajout de panneaux pour le gestionnaire de projets.
- Possibilité d'ajouter des fichiers depuis un dossier à un projet.
- Gestion du cliquer-déposer dans le gestionnaire de projets.
- La liste des fichiers récents est paramétrable.
- Mise en avant du bloc logique actif.

### version 5.8 - septembre 2010

- Une nouvelle icône pour Notepad++.
- Possibilité d'ouvrir les fichiers systèmes 64 bits.
- Possibilité d'éditer le menu contextuel.
- Deux nouvelles méthodes de retour automatique à la ligne.
- Ajout d'une fenêtre Résumé.

### version 5.7 - juillet 2010

- Possibilité de rechercher les lignes non marquées.
- Possibilité d'importer et exporter des langages utilisateurs.
- Intégration des nouveaux mots clés HTML5 et CSS3.
- Ajout des plugins *NppFTP* et *Select 'N' Launch* par défaut.
- Suppression du plugin par défaut *NppNetNote*.

### version 5.6 - novembre 2009

- Support d'un grand nombre de langues, langages et encodages supplémentaires.
- Détection automatique de l'encodage des fichiers html et xml.
- Possibilité de conversion depuis un encodage UNICODE.
- Possibilité de rechercher des caractères UNICODE en mode étendu.
- Ajout des fonctionnalités "Texte à rechercher" et "Résultat de recherche suivant".
- Possibilité de sauter d'un marqueur à un autre, en avant ou en arrière.
- Guides indiquant les niveaux d'indentations des balises html et xml actives.
- Suppression du plugin par défaut *Doc Monitor*.

### version 5.5 - septembre 2009

- Ajout du *Plugin Manager*.
- Nouvelle icône : arrivée du caméléon.
- Fonctionnalités de multi-édition et de multi-sélection.
- Possibilité de rechercher dans les fichiers d'un dossier.
- Possibilité de faire monter ou descendre les lignes sélectionnées.
- Possibilité d'importer des plugins (chargement à la volée).
- Possibilité d'importer des thèmes.

### version 5.4 - mai 2009

- Possibilité de sélectionner des thèmes à la volée.
- Gestion du cliquer-déposer des onglets entre plusieurs instances de Notepad++.
- Ajout du mode colonne, de la sélection verticale.
- Détection de l'encodage *UTF16*.
- Indentations utilisant des espaces ou des tabulations.

### version 5.3 - mars 2009

- Augmente les champs de Find/Replace à 2047 caractères.
- SConstruct et SConscript sont reconnus comme des fichiers python. 
- Ajout de la barre d'indication des changement d'état des lignes.
- Glisser un dossier dans Notepad++ pour ouvrir tous les fichiers qu'il contient de manière récursive.
- Ajout de la fonctionnalité "Rechercher dans le document actuel".
- La plupart des options de la fenêtre Find/Replace s'enregistrent.
- Plus de fenêtre d'alerte lors de la fermeture d'un fichier sans nom non enregistré.
- Le changement de styles des résultats de recherche est visible à la volée.
