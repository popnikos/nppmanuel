# Liste des fonctions

La liste des fonctions est un panneau de l'[interface](interface.md) affichant toutes les fonctions ou méthodes du fichier ouvert. Il est accessible via le menu *Affichage -> Liste des Fonctions*.

![Liste des fonctions](./images/npp_functionlist.png)

La barre du menu permet de filtrer les résultats, de changer l'ordre d'affichage (par défaut dans l'ordre du fichier, ils peuvent être triés par ordre alphabétique) et de recharger la liste.

Double-cliquer sur un élément de la liste permet de naviguer jusqu'à son emplacement dans le fichier.

Introduit en juin 2013, à la [version 6.4](historique-des-versions.md), les langages de programmation reconnus par défaut sont régulièrement mis à jour, et comprennent : PHP, C, C++, C#, Java, XML, Batch, INI, JS, Perl, Python, Bash et NSIS.

## Définition des languages

Le [fichier de configuration](fichiers-de-configuration.md) des languages est situé à l'emplacement :

    %APPDATA%\Notepad++\functionList.xml

> Le fichier est situé dans le dossier de Notepad++ en cas d'[installation via un package](installation.md).

Chaque language y est défini par un noeud `<parser>` ayant comme attributs :

- `id` : L'identifiant unique du parseur, utilisé pour le noeud `<association>`, par exemple `python_function`
- `displayName` : Nom lisible du parseur, par exemple `Python class`
- `commentExpr` : [expression régulière](expressions-regulieres.md) définissant les commentaires, qui seront ignorés, par exemple `(#.*?$|'''.*?('''|\Z))`

Les noeuds `<parser>` contiennent :

- Un noeud `<function>` pour les languages constitués uniquement de fonctions (C par exemple)
- Un noeud `<classRange>` contenant des `<function>`, pour les languages dont les fonctions sont dans des classes (Java par exemple)
- Les deux pour les languages dont les fonctions sont dans des classes ou en dehors (C++ par exemple)

Exemple de parseur pour le Python :

```xml
<parser id="python_function" displayName="Python class" commentExpr="(#.*?$|'''.*?('''|\Z))">
    <classRange mainExpr="(?&lt;=^class ).*?(?=\n\S|\Z)">
        <className>
            <nameExpr expr="\w+(?=[\(|:])"/>
        </className>
        <function mainExpr="(?&lt;=def ).+?(?=:)">
            <functionName>
                <funcNameExpr expr=".*"/>
            </functionName>
        </function>
    </classRange>
    <function mainExpr="(?&lt;=def ).+?(?=:)">
        <functionName>
            <funcNameExpr expr=".*"/>
        </functionName>
    </function>
</parser>
```

Dans le cas d'un parseur avec `function` et `classRange`, le moteur traitera d'abord les zones de classes, puis les fonctions hors-classes.

Les noeuds `<function>` et `<classRange>` peuvent avoir les attributs :

- `mainExpr` : [expression régulière](expressions-regulieres.md) principale extrayant l'ensemble des informations
- `displayMode` : template d'affichage de l'élément dans la liste des fonctions (pas implémenté)
- `openSymbole` et `closeSymbol` : si définis, déterminent la zone correspondant à la classe pour un noeud `classRange`. Le moteur gère de lui même les imbrications.

`<function>` et `<classRange>` peuvent contenir des noeuds `<functionName>` ou `<className>` pour extraire plus précisément les noms de fonction ou classe du résultat de la `mainExpr`. S'ils sont absents, la `mainExpr` entière sert de nom de fonction, et le nom de classe n'est pas utilisé.

Chaque `<nameExpr>` sert à extraire un nom de plus en plus précis que le résultat précédent via son [expression régulière](expressions-regulieres.md) `expr`. Tant qu'un noeud `nameExpr` donne un résultat, le noeud suivant est appliqué à ce résultat.

Pour finir, le noeud `<parser>` est associé à un language existant dans Notepad++ via un noeud `<association>` en début de fichier. Par exemple pour python :

```xml
<association langID="22" id="python_function"/>
```

L'`id` correspond au parseur, et le language à associer est déterminé au moyen de l'un des attributs suivants :

- `langID` pour l'identifiant d'un language prédéfini dans Notepad++, par exemple `22` pour python
- `ext` pour une extension de fichier, par exemple `.custext`
- `userDefinedLangName` pour un langage utilisateur , par exemple `Mon language custom`