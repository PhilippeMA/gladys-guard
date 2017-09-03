const exec = require('child_process').exec;
var Promise = require('bluebird');
var shared = require('./shared.js');

module.exports = function recVid() {
    return new Promise(function(resolve, reject) {

          var duree = null;  //durée en seconde
          var lastRec = null;
          var device = null;
          var recLocation = null;
          var saveLocation = null;
          var width = 0;
          var height = 0;
          var fps = 0;
          var timeout = 'timeout ';
          var vlc= null;
          var firstTime = false;

            gladys.param.getValues(['GUARD_LAST_REC', 'GUARD_REC_DURATION', 'GUARD_REC_DEVICE', 'GUARD_SAVE_LOCATION', 'GUARD_RES_WIDTH', 'GUARD_RES_HEIGHT', 'GUARD_VID_FPS'])
              .then(function(params){

              lastRec = params[0];
              duree = params[1];
              device = params[2];
              saveLocation = params[3];
              width = params[4];
              height = params[5];
              fps = params[6];
              recLocation = shared.videoFullEmplacement;

              timeout = timeout + duree + ' ';

              //Lancement du premier enregistrement
              if (lastRec == 'NULL'){
                firstTime = true;
              }

              // enregistrement de la vidéo uniquement si le dernier enregistrement est terminé
              if (new Date().getTime() > new Date(parseInt(lastRec)).getTime() + parseInt(duree)*1000 || firstTime) {
                //vlc = 'cvlc v4l2:// :v4l-vdev="' + device + '" :v4l-adev="/dev/pcm" :v4l-norm=3 :v4l-frequency=-1 :v4l-caching=300 :v4l-samplerate=44100 :v4l-width=1280 :v4l-height=720 --sout="#transcode{vcodec=h264,vb=2000,fps=12,scale=1,acodec=mp3,ab=90,channels=1,samplerate=44100}:standard{access=file,mux=mp4,dst=' + recLocation + 'output.mp4}"';
                //v4l-norm = 3 : AUTO (contre PAL, SECAM, NTSC)
                vlc = 'cvlc v4l2:// :v4l-vdev="' + device + '" :v4l-adev="/dev/pcm" :v4l-norm=3 :v4l-frequency=-1 :v4l-caching=300 :v4l-samplerate=44100 :v4l-width=' + width + ' :v4l-height=' + height + ' --sout="#transcode{vcodec=h264,vb=2000,fps=' + fps + ',scale=1}:standard{access=file,mux=mp4,dst=' + recLocation + 'output.mp4}"';

                //Le périphérique vidéo n'est très souvent pas libéré => il faut le libérer et le recharger
                sails.log.debug('Initialisation du périphérique vidéo...');
                resetDevice();
                sleep(2);
                //Suite : rechargement du device video
                refreshDevice();
                sleep(2);
                // Capture vidéo
                sails.log.debug('Démarrage de la capture...');
                //Stockage de la date/heure de déclenchement de l'enregistrement
                dateMillisec = new Date().getTime();
                gladys.param.setValue({name: 'GUARD_LAST_REC', value: dateMillisec});
                exec(timeout + vlc, (error, stdout, stderr) => {
                  if (error) {
                    //console.error(`exec error: ${error}`);
                    //Même en cas d'erreur, Sauvegarde de la vidéo : exec retourne une erreur systématiquement (à revoir...)
                    saveVid(recLocation + 'output.mp4', saveLocation, dateMillisec + '.mp4');
                    reject(new Error('VLC a retourné l\'erreur : ' + error));
                  }
                  else {
                    // Tout s'est bien passé
                    // => Sauvegarde de la video
                    saveVid(recLocation + 'output.mp4', saveLocation, dateMillisec + '.mp4');
                    resolve(stdout);
                  }
                });
              }
              else {
                reject(new Error('Un enregistrement est actuellement en cours. Merci de relancer plus tard.'));
              }
            })
            .catch(function(err){
              //Gladys 3.6.1 ne gère pas d'erreur sur la fonction param.getValue
              reject(new Error('Enregistrement en erreur : ' + err));
            });
    });
};

function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}

//Sauvegarde des vidéos pour conserver un historique : le paramètre et la date en millisecondes
function saveVid(lastVideo, repCible, newName){
  exec('cp ' + lastVideo + ' ' + repCible + newName, (error, stdout, stderr) => {
    if (error) {
      reject(new Error('La Sauvegarde de la vidéo a échoué : ' + error));
    }
  });
}

//uvcvideo : pilote pour webcam (installé sur raspi de base)
function resetDevice(){
  exec('sudo modprobe -r uvcvideo', (error, stdout, stderr) => {
    if (error) {
      //console.error(`exec error: ${error}`);
      reject(new Error('modproble - r uvcvideo error : ' + error));
    }
  });
}

function refreshDevice(){
  exec('sudo modprobe uvcvideo', (error, stdout, stderr) => {
    if (error) {
      //console.error(`exec error: ${error}`);
      reject(new Error('modproble - r uvcvideo error : ' + error));
    }
  });
}
