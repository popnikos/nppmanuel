---
layout: default
chapitre: 2
order: 2
---
# Raccourcis clavier

Les raccourcis propres aux **plugins** sont traités dans la partie [plugins](plugins.md), ceux propres aux **macros** dans la partie [macros](macros.md).

## Raccourcis clavier par défaut

La liste n'est pas exhaustive.

### Général

Voir [préférences générales](preferences/generales.md).

- `Ctrl-o` : ouvrir un fichier.
- `Ctrl-n` : crée un nouvel onglet.
- `Ctrl-w` : ferme l'onglet actif.
- `Clic molette` : ferme l'onglet visé.

Voir [préférences diverses](preferences/diverses.md).

- `Ctrl-Tab` : avance dans la liste des onglets ouverts.
- `Ctrl-Shift-Tab` : recule dans la liste des onglets ouverts.
- `Clic droit-Molette` : avance/recule dans la liste des onglets ouverts.

- `Ctrl-s` : enregistre l'onglet actif.
- `Ctrl-Alt-s` : enregistrer sous l'onglet actif.
- `Ctrl-Shift-s` : enregistre tous les onglets modifiés.

- `Alt-p` : imprimer l'onglet actif.
- `Alt-F4` : quitter.

### Sélection

- `Ctrl-a` : sélectionne tout.
- `Alt` : sélection rectangulaire.

Il est possible de sélectionner une ou plusieurs lignes (retours chariot compris) en cliquant sur leurs numéros à gauche.

### Édition

- `Ctrl-z` : annule la modification précédente.
- `Ctrl-y` : rétablit la modification précédente.

Notepad++ enregistre un historique des modifications titanesque : vous pouvez revenir sur des heures de travail sans problème.

- `Ctrl-x` : coupe la sélection.
- `Ctrl-c` : copie la sélection.
- `Ctrl-v` : colle l'élément en mémoire.
- `Ctrl-d` : duplique la ligne active ou la sélection.

La duplication est parfois plus efficace que le couple copier/coller, et deviendra vite votre raccourci favori.

- `Ctrl-i` : sépare la sélection en plusieurs lignes.
- `Ctrl-j` : joint les lignes sélectionnées (supprime les retours chariot).
- `Ctrl-l` : coupe la ligne active ou les lignes sélectionnées.
- `Ctrl-t` : inverse la ligne active avec la précédente.

- `Tab` : ajoute un niveau d'indentation à la ligne active ou la sélection.
- `Shift-Tab` : supprime un niveau d'indentation à la ligne active ou la sélection.

- `Ctrl-q` : Commente/décommente les lignes de la sélection.
- `Ctrl-Shift-q` : Commente/décommente la sélection en mode multi-lignes.

Les commentaires s'adaptent automatiquement au langage utilisé.

- `Ctrl-u` : met la sélection en minuscules.
- `Ctrl-Shift-u` : met la sélection en majuscules.

- `Ctrl-Entrée` : lance l'auto-complétion de mot sur la sélection.
- `Ctrl-Espace` : lance l'auto-complétion de fonction sur la sélection.

Voir les [préférences d'autocomplétion](preferences/autocompletion.md).

### Recherche, remplacement

Voir [recherches et remplacements](recherches-et-remplacements.md).

- `Ctrl-g` : ouvre la fenêtre de positionnement.
- `Ctrl-f` : ouvre la fenêtre de recherche.
- `Ctrl-h` : ouvre la fenêtre de remplacement.
- `Ctrl-Shift-f` : ouvre la fenêtre de recherche/remplacement dans les fichiers d'un dossier.
- `C-r` : ouvre la fenêtre de recherche/remplacement complexe.

- `F3` : recherche suivante.
- `Shift-F3` : recherche précédente.
- `Ctrl-m` : surligner toutes les occurrences de la recherche.
- `Ctrl-Shift-m` : supprimer tous les surlignages.

- `Ctrl-b` : aller au délimiteur jumeau.

### Affichage

- `Ctrl-+` : zoome.
- `Ctrl`+"-" : dézoome.
- `Ctrl-Molette` : zoome/dézoome.
- `Ctrl-/` : réinitialise le zoom.

- `f11` : entrer/sortir du mode plein écran.
- `f12` : entrer/sortir du mode "post-it" : les menus et bordures se retirent et la fenêtre se fixe au premier plan.

- `Alt-h` : cacher la ligne active ou les lignes de la sélection.

Vous pouvez enrouler/dérouler des blocs d'instructions au moyen des petits "+/-" en début de lignes.

## Shortcut Mapper

Il est possible de créer ou modifier le raccourci clavier de importe quelle fonction de Notepad++, même celles habituellement inaccessibles (copier, coller, déplacement du curseur...).

Le *Shortcut Mapper* est accessible depuis le menu *Paramétrage -> Raccourcis clavier...* :

![Le Shortcut Mapper, qui gère les raccourcis claviers](npp_shortcut_mapper.png)

Double-cliquez sur une ligne (ou *Clic droit -> Modifier*) pour ouvrir la fenêtre *Shortcut*. Décochez-y toute option pour supprimer un raccourci :

![La fenêtre Shortcut, permettant de définir le raccourci clavier d'une fonction](npp_shortcut.png)

Les raccourcis de Scintilla peuvent être multiples, leur fenêtre d'attribution permet donc l'ajout ou la suppression de raccourcis pour une même fonction :

![La fenêtre Shortcut améliorée, permettant de définir plusieurs raccourcis clavier pour une seule fonction](npp_shortcut_multi.png)
