---
plugin:
        name: Emmet
        desc: Raccourcis HTML/CSS
        date: 2010
---
# Emmet

Emmet est un [plugin](../plugins.md) permettant de créer rapidement une structure HTML/CSS, existant sous forme d'extension pour tous les principaux éditeurs de texte et environnements de développement.

- Site officiel : <https://emmet.io>
- Page du plugin pour Notepad++ : <https://github.com/emmetio/npp>

L'ancien nom d'Emmet est *Zen Coding*.

## Installation

Il peut être installé ou désinstallé simplement depuis le [Plugin Manager](plugin-manager.md).

## Utilisation

Les fonctionnalités d'Emmet sont principalement accessible par raccourcis clavier et par le menu *Compléments -> Emmet*.

La fonction principale, consistant à transformer la syntaxe tapée en une structure HTML complexe, doit être appelée lorsque le curseur d'édition est situé à proximité de la formule au moyen du raccourci `Ctrl+Alt+Enter`.

La syntaxe :

```html
div#page>div.logo+ul#navigation>li*5>a
```

Serait remplacée par :

```html
<div id="page">
        <div class="logo"></div>
        <ul id="navigation">
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
        </ul>
</div>
```

Le portage de Zen Coding dans Notepad++ a été réalisé en Python au moyen du plugin [Npp Python Script](http://sourceforge.net/projects/npppythonscript).
