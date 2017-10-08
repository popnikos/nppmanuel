---
layout: default
---
# Notepad++, un caméléon sous Linux

Notepad++ est intrinsèquement lié à Windows : il n'existe pas - et n'existera jamais - de version pour Linux. Il est toutefois possible d'utiliser Notepad++ sous Linux au moyen du logiciel [Wine](http://winehq.org).

Ce dernier simule un environnement Windows afin d'en faire marcher les logiciels dans un autre système d'exploitation. Il ne s'agit ni de virtualisation, ni d'émulation.

## Installer Wine

![](http://insomniedugeek.fr/wp-content/uploads/2010/07/winehq_logo_glass.png)

Installez le paquet wine (il s'agit ici des commandes Debian/Ubuntu.  Utilisez bien entendu les commandes propres à votre distribution) :

    sudo apt-get install wine

Vous pouvez faire cette opération depuis un gestionnaire de paquets ou une logithèque.

## Installer Notepad++

Téléchargez l'exécutable de la dernière version de Notepad++, permettez son exécution en tant que programme et lancez-le avec Wine :

```
chmod +x nomDuFichier.exe
wine nomDuFichier.exe
```

Vous pouvez faire ces opérations par un clic droit sur le fichier, *Propriétés*, onglets **Permissions** et **Ouvrir avec**.

Installez Notepad++ comme si vous étiez sous Windows.

## Ouvrir en lignes de commandes

Une fois installé, Notepad++ est manipulable en lignes de commandes.

Pour l'ouvrir par exemple, tapez :

```wine "C:\Program Files\Notepad++\notepad++.exe"```

C'est un poil long, je vous conseille donc de faire un alias. J'utiliserais `npp`.

Pour ouvrir un fichier, vous n'avez ainsi qu'à indiquer :

```npp monFichier```

Si le fichier n'existe pas, Notepad++ vous propose de le créer.

## Ouvrir automatiquement avec Notepad++ sous Ubuntu

Avoir à ouvrir un fichier depuis l'application ou en lignes de commande n'est pas toujours agréable. Voila comment toujours associer Notepad++ à un type de fichier.

- Faites un clic droit et lancez *Ouvrir avec -> Autre Application...*.
- Déroulez *Utiliser une commande personnalisée* et inscrivez-y :

```wine "C:\Program Files\Notepad++\notepad++.exe"```

## Limitations

Cette section liste les problèmes rencontrés lors de l'utilisation de Notepad++ 5.8 avec Ubuntu 10.04 et Wine 1.1.42. Je ne certifie pas que ces problèmes soient automatiques lors de l'utilisation de Notepad++ sous Linux, mais ils permettent de se rendre compte des limitations que cela peut imposer.

### Commutateur de documents

Lorsque le [[notepadpp:options#commutateur_de_document|commutateur de document]] est activé (par défaut), l'utilisation de `Ctrl+Tab` ouvre la liste dans une fenêtre fixe, qui ne peut-être fermée qu'avec la sélection d'un élément de la liste à la souris.

**Solution :** désactiver le commutateur de document (onglet [[notepadpp:options#divers|Divers]] des options) pour pouvoir switcher entre les onglets. Les fichiers récents sont listés dans le menu *Fichier*.

#### Valeurs des préférences

Dans la fenêtre de [[notepadpp:options|préférences]], les valeurs numériques ne peuvent être modifiées. Cela implique l'impossibilité de changer :

- la nombre de colonnes de la marge droite,
- la taille des tabulations,
- le caractère de déclenchement de l’auto-complétion,
- le nombre maximum de fichiers récents.
