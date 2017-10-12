# Contribuer

Vous pouvez contribuer de plusieurs manières :

- En indiquant des erreurs de contenu ou en proposant des corrections dans les [issues][issues]
- En rapportant des bugs ou en proposant des améliorations pour le site dans les [issues][issues]
- En éditant le contenu
- En modifiant le site

Vous êtes merveilleux :)

## Editer le contenu

Le site est rédigé en [Markdown](https://fr.wikipedia.org/wiki/Markdown).

Les sources des pages sont rangées dans le dossier `_pages` :  <https://github.com/nliautaud/nppmanuel/tree/master/_pages>

- Pour éditer une page, vous pouvez la choisir depuis la liste puis cliquer sur l'icône de crayon, ou suivre le bouton *Modifier cette page* présent sur chaque page du site.
- Pour ajouter une page, vous pouvez utiliser le bouton [*Create new file*][new].

Avant de choisir *Commit changes* ou *Commit new file*, veuillez à bien décrire les changements effectués.

En éditant ou créant un nouveau fichier, Github va automatiquement copier le projet sur votre compte et créer une proposition de modification (voir [Editing files in another user's repository][editother]).

## Modifier le site

Le site est construit avec [Jekyll](https://jekyllrb.com).

Sont bienvenues les corrections de bugs, les améliorations du thème, les améliorations de navigation / UX, etc.

Pour faire des modifications :

1. [Forker][fork] et cloner le projet
2. Installer les dépendances ([jekyll requirements][requirements] puis `bundle install`)
3. Créer une nouvelle branche
4. Faire les modifications et tester (`bundle exec jekyll serve`)
5. Soumettre un Pull Request ([Using Pull Requests](https://help.github.com/articles/using-pull-requests/))
6. Attendre un retour :)

Ne pas hésiter à demander de l'aide aux [contributeurs][contrib] ou via les [issues][issues].

Quelques trucs qui peuvent simplifier l'acceptation des modifications :

- Inclure des captures d'écran des changements visuels avant/après.
- Séparer chaque feature ou modification dans des PR distincts.
- Donner le plus d'explications possible dans les messages de commit et du PR.


:heartpulse:

[fork]: https://github.com/nliautaud/nppmanuel/fork
[issues]: https://github.com/nliautaud/nppmanuel/issues
[contrib]: https://github.com/nliautaud/nppmanuel/graphs/contributors
[new]: https://github.com/nliautaud/nppmanuel/new/master/_pages
[requirements]: https://jekyllrb.com/docs/installation/#requirements
[editother]: https://help.github.com/articles/editing-files-in-another-user-s-repository
