Gladys Guard
============
Module for gladysproject : record and read video file

Pré-requis
----------
<li>VLC média player</li>

Installation
------------
Installer le module via la transaction Gladys puis redémarrer Gladys :
<li>Nom : Gladys guard</li>
<li>Version : 0.0.1</li>
<li>URL git : https://github.com/PhilippeMA/gladys-guard.git</li>
<li>Slug : gladysguard</li>


Créer un script qui pourra être déclenché pour enregistrer une vidéo sur déclenchement d'un scénario (lorsqu'un mouvement est détecté, par exemple). Voici le contenu :
```bash
gladys.modules.gladysguard.recVid()
  .then(function(value){
    //nothing to do
  })
  .catch(function(err){
    console.log(err);
  });
```

Créer un scénario qui permette d'enregistrer une vidéo en appelant le script précédemment créé.

Enfin, ajouter la box **Gladys guard** au dashboard. Cette box permettra de lire la dernière vidéo enregistrée.

Configuration
-------------
Lors de l'installation du module, des paramètres sont initialisés. Les voici :
<li>GUARD_REC_DEVICE : votre caméra</li>
<li>GUARD_SAVE_LOCATION : répertoire d'archivage des vidéos enregistrées (les vidéos portent comme nom le timestamp)</li>
<li>GUARD_LAST_REC : timestamp du dernier enregistrement (en millisecondes)</li>
<li>GUARD_REC_DURATION : durée de l'enregistrement (sachant qu'à date, l'enregistrement tarde à démarrer...)</li>
<li>GUARD_RES_WIDTH : résolution horizontale</li>
<li>GUARD_RES_HEIGHT : résolution verticale</li>
<li>GUARD_VID_FPS : nombre d'images par seconde enregistrées</li>
