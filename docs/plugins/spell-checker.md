---
plugin:
    name: Spell Checker
    desc: Correcteur orthographique
    date: 2007
---
# Spell Checker

Ce [plugin](../plugins.md) intégrait un correcteur orthographique à [Notepad++](../notepad++.md).

Il a été créé en 2007 par [Jens Lorenz](http://sourceforge.net/users/jenslorenz) et développé jusqu'en 2009.

## Installation

::: warning Attention
Ce plugin n'est plus maintenu. Voir [DSpellCheck](dspellcheck.md).
:::

Il peut être installé ou désinstallé simplement depuis le [Plugin manager](plugin-manager.md).

## Dictionnaire Aspell

Le plugin nécessite [GNU Aspell](https://fr.wikipedia.org/wiki/GNU_Aspell), un correcteur orthographique libre.

- Télécharger la dernière version d'[Aspell pour win32](http://aspell.net/win32) (*Full installer*) et l'installer.
- Télécharger le [dictionnaire](http://aspell.net/win32) (*Precompiled dictionaries*) voulu et l'installer.
- Lancer Notepad++ puis Spell-Checker.

Si le plugin ne trouve pas le dictionnaire Aspell :

![Spell-checker ne trouvant pas GNU Aspell](../images/notepadpp_spellchecker_aspell.png)

Indiquez dans le champ de texte l'emplacement du dossier *bin* de votre répertoire d'installation d'Aspell en remplacant *C:\Program Files* par deux points (chemin relatif).

## Utilisation

Le correcteur orthographique peut être lancé sur tout le texte ou une sélection :

- Par le menu *Compléments -> Spell-Checker -> Spell-Checker*,
- Par le raccourci clavier `Ctrl-Alt-Shift-s`,
- Par son icône, située au bout de la barre de menu : ![Icône de Spell-Checker](../images/notepadpp_spellchecker_icon.png)

![Panneau de Spell-Checker](../images/notepadpp_spellchecker_panel.png)

- **Original text** : mot trouvé dans le texte.
- **Replace by** : mot de remplacement.
- **Liste de mots** : propositions de remplacement.
- **Replace** : remplacer le mot trouvé par le mot de remplacement.
- **Learn** : apprendre ce mot au dictionnaire.
- **Ignore** : ignorer ce mot.
- **Ignore All** : ignorer toutes les occurrences de ce mot.
- **Language** : dictionnaire utilisé.

Le mot vérifié est sélectionné, ses occurrences dans le texte sont surlignées.
