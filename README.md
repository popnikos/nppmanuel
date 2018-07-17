---
title: À propos
editLink: false
---
# Manuel++

Un manuel pour [Notepad++](notepad-plus-plus.md), l'éditeur de texte caméléon.

Ce manuel non-officiel documente d'un point de vue utilisateur l'intégralité des fonctionnalités du logiciel, de façon exhaustive et pédagogique.

## License

Manuel++ est libre et open-source.

- [License (MIT)][license]
- [Sources (Github)][repo]
- [Contributeurs][contrib]

## Contribuer

Vous pouvez contribuer de plusieurs manières :

- En créant des [**issues**](https://github.com/nliautaud/nppmanuel/issues) pour rapporter des erreurs ou proposer des ajouts et améliorations
- En éditant directement le contenu
- En modifiant le thème du site

### Editer le contenu

Le site est rédigé en [Markdown](https://fr.wikipedia.org/wiki/Markdown).

- Pour éditer une page, vous pouvez suivre le lien `Modifier cette page` présent sur chaque page du site.
- Pour ajouter une page, vous pouvez naviguer sur le [repository][repo] puis utiliser le bouton *Create new file*.

Avant de choisir *Commit changes* ou *Commit new file*, veuillez à bien décrire les changements effectués.

En éditant ou créant un nouveau fichier, Github va automatiquement copier le projet sur votre compte et créer une proposition de modification (voir [Editing files in another user's repository][editother]). Pour de plus amples modifications, vous pouvez cloner le projet et rassembler vos modifications dans un *Pull Request* (voir [Modifier le site](#modifier-le-site)).

### Modifier le site

Le site est propulsé par [Vuepress](https://vuepress.vuejs.org) et généré par [Github Pages](https://pages.github.com/).

1. [Forker][fork] et cloner le projet
2. Installer les dépendances ([yarn](https://yarnpkg.com) puis `yarn`)
3. Créer une nouvelle branche
4. Faire et tester ses modifications (`yarn dev`)
5. Soumettre un Pull Request ([Using Pull Requests](https://help.github.com/articles/using-pull-requests/))

Ne pas hésiter à demander de l'aide aux [contributeurs][contrib] ou via les [issues][issues].

Quelques trucs qui peuvent simplifier l'acceptation des modifications :

- Inclure des captures d'écran des changements visuels avant/après.
- Séparer chaque feature ou modification dans des PR distincts.
- Donner le plus d'explications possible dans les messages de commit et du PR.

### Images

Les captures sont faites avec Notepad++ en Français, et mises à jour si possible sous la dernière version de Notepad++ et de Windows. Les captures de la fenêtre principale sont standardisées à la largeur minimum à laquelle la barre de menu s'affiche encore sur une ligne (815px environ) et à une hauteur réduite, pour pouvoir s'afficher entièrement au sein d'un corps de texte.

Les images récentes ont une nomenclature standardisée de type `npp_subject.png`.

[fork]: https://github.com/nliautaud/nppmanuel/fork
[issues]: https://github.com/nliautaud/nppmanuel/issues
[contrib]: https://github.com/nliautaud/nppmanuel/graphs/contributors
[repo]: https://github.com/nliautaud/nppmanuel
[license]: https://github.com/nliautaud/nppmanuel/blob/master/LICENSE
[requirements]: https://jekyllrb.com/docs/installation/#requirements
[editother]: https://help.github.com/articles/editing-files-in-another-user-s-repository