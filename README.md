Gladys Guard
============
Module for gladysproject : record and read video file

Pré-requis
----------
<li>VLC média player</li>

Installation
------------
Une fois le module installé, il est nécessaire de créer un script qui pourra être déclenché pour enregistrer une vidéo sur déclenchement d'un scénario (lorsqu'un mouvement est détecté, par exemple). Voici le contenu :
```bash
gladys.modules.gladysguard.recVid()
  .then(function(value){
    console.log(`Enregistrement déclenché : ` + value);
  })
  .catch(function(err){
    console.log(err);
  });
```
