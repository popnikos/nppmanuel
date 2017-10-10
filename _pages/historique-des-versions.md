---
layout: default
title: Historique des versions
---
# Historique des versions

[Notepad++](notepad++.md) est développé de façon constante depuis plus de cinq ans, au rythme d'une version mineure tous les quatre mois environ (qui amène de nouvelles améliorations ou fonctionnalités.md) et de versions correctives pratiquement tous les mois.

Voila une liste des changements majeurs des dernières versions ou releases de Notepad++, d'un point de vue utilisateur. Il s'agit d'une traduction des *changelogs* officiels, épurés des corrections de bugs et des informations concernant uniquement le cœur du logiciel.

## Version 6

La sixième version majeure de Notepad++ est la version courante, développée depuis 2012. Elle est principalement caractérisée par le support complet des expressions rationnelles (PCRE), l'intégration d'une liste des fonctions et la sauvegarde des sessions.

### version 6.6

- La sauvegarde de session permet de conserver l'état de la session à la fermeture de Notepad++ pour retrouver les fichiers en cours d'édition au lancement suivant, sécurisant au passage les pertes de données accidentelles. La fonction peut être activée/désactivée via les préférences ou une option de ligne de commande, et il est possible de paramétrer la fréquence et l'emplacement des sauvegardes de sessions.
- Les paramètres du logiciel peuvent être enregistrés et centralisés via un compte Dropbox, Microsoft OneDrive ou Google Drive.
- Les couleurs de fond des thèmes s'appliquent aux diverses boites de dialogues.
- La Liste des Fonctions intègre le language python.

### version 6.5 - septembre 2013

- La Liste des Fonctions intègre les langages php, java, perl, xml, batch, ini, nsis ainsi que les langages utilisateurs. Son panneau se dote d'un champ de recherche, d'une fonction de tri et d'un bouton de rechargement.
- L'Insertion automatique permet de fermer automatiquement pendant la frappe les parenthèses, guillemets, crochets, accolades et balises xml/html, ou des paires définies par l'utilisateur. Ces nouvelles options apparaissent dans les préférences, catégorie Autocomplétion.
- Le Collage multiple permet, en sélection multiple ou mode colonne, de coller en une fois à tous les emplacements du curseur un texte précédemment copié.
- Support du langage [CoffeeScript](https://fr.wikipedia.org/wiki/CoffeeScript)
- Apparition de deux options supplémentaires pour marquer les recherches : respecter la casse ou marquer les mots entiers uniquement.
- Si le logiciel est lancé en administrateur l'information est désormais notée sur la barre de titre.

### version 6.4 - juin 2013

- Introduction du panneau de Liste des Fonctions, limité aux languages C/C++ et Javascript.
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

- Support des expressions régulières PCRE.
- Ajout de la "Document Map".

## Version 5

La cinquième version majeure de Notepad++ a été développée et distribuée entre 2008 et 2011. Elle est principalement caractérisée par l'intégration du gestionnaire de plugins et d'une gestion de projets.

### version 5.9 - juin 2011

- Ajout de panneaux pour le gestionnaire de projets.</li>
- Possibilité d'ajouter des fichiers depuis un dossier à un projet.</li>
- Gestion du cliquer-déposer dans le gestionnaire de projets.</li>
- La liste des fichiers récents est paramétrable.</li>
- Mise en avant du bloc logique actif.</li>


### version 5.8 - septembre 2010

- Une nouvelle icône pour Notepad++.</li>
- Possibilité d'ouvrir les fichiers systèmes 64 bits.</li>
- Possibilité d'éditer le menu contextuel.</li>
- Deux nouvelles méthodes de retour automatique à la ligne.</li>
- Ajout d'une fenêtre Résumé.</li>


### version 5.7 - juillet 2010

- Possibilité de rechercher les lignes non marquées.</li>
- Possibilité d'importer et exporter des langages utilisateurs.</li>
- Intégration des nouveaux mots clés HTML5 et CSS3.</li>
- Ajout des plugins <em>NppFTP</em> et <em>Select 'N' Launch</em> par défaut.</li>
- Suppression du plugin par défaut <em>NppNetNote</em>.</li>


### version 5.6 - novembre 2009

- Support d'un grand nombre de langues, langages et encodages supplémentaires.</li>
- Détection automatique de l'encodage des fichiers html et xml.</li>
- Possibilité de conversion depuis un encodage UNICODE.</li>
- Possibilité de rechercher des caractères UNICODE en mode étendu.</li>
- Ajout des fonctionnalités "Texte à rechercher" et "Résultat de recherche suivant".</li>
- Possibilité de sauter d'un marqueur à un autre, en avant ou en arrière.</li>
- Guides indiquant les niveaux d'indentations des balises html et xml actives.</li>
- Suppression du plugin par défaut <em>Doc Monitor</em>.</li>


### version 5.5 - septembre 2009

- Ajout du <em>Plugin Manager</em>.</li>
- Nouvelle icône : arrivée du caméléon.</li>
- Fonctionnalités de multi-édition et de multi-sélection.</li>
- Possibilité de rechercher dans les fichiers d'un dossier.</li>
- Possibilité de faire monter ou descendre les lignes sélectionnées.</li>
- Possibilité d'importer des plugins (chargement à la volée).</li>
- Possibilité d'importer des thèmes.</li>


### version 5.4 - mai 2009

- Possibilité de sélectionner des thèmes à la volée.</li>
- Gestion du cliquer-déposer des onglets entre plusieurs instances de Notepad++.</li>
- Ajout du mode colonne, de la sélection verticale.</li>
- Détection de l'encodage <em>UTF16</em>.</li>
- Indentations utilisant des espaces ou des tabulations.</li>


### version 5.3 - mars 2009

- Augmente les champs de Find/Replace à 2047 caractères.</li>
- SConstruct et SConscript sont reconnus comme des fichiers python. </li>
- Ajout de la barre d'indication des changement d'état des lignes.</li>
- Glisser un dossier dans Notepad++ pour ouvrir tous les fichiers qu'il contient de manière récursive.</li>
- Ajout de la fonctionnalité "Rechercher dans le document actuel".</li>
- La plupart des options de la fenêtre Find/Replace s'enregistrent.</li>
- Plus de fenêtre d'alerte lors de la fermeture d'un fichier sans nom non enregistré.</li>
- Le changement de styles des résultats de recherche est visible à la volée.</li>
