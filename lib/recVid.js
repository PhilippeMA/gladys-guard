const exec = require('child_process').exec;
var Promise = require('bluebird');

module.exports = function recVid() {
    return new Promise(function(resolve, reject) {
      var duree = 20;  //durée en seconde
      var timeout = 'timeout ' + duree + ' ';
      var vlc= 'cvlc v4l2:// :v4l-vdev="/dev/video0" :v4l-adev="/dev/pcm" :v4l-norm=3 :v4l-frequency=-1 :v4l-caching=300 :v4l-samplerate=44100 :v4l-width=1280 :v4l-height=720 --sout="#transcode{vcodec=h264,vb=2000,fps=12,scale=1,acodec=mp3,ab=90,channels=1,samplerate=44100}:standard{access=file,mux=mp4,dst=/home/pi/gladys/www/video/output.mp4}"'

      //Le périphérique vidéo n'est très souvent pas libéré => il faut le libérer et le recharger
      sails.log.debug('Initialisation du périphérique vidéo...');
      resetDevice();
      sleep(1);
      //Suite : rechargement du device video
      refreshDevice();
      sleep(1);
      // Capture vidéo
      sails.log.debug('Démarrage de la capture...');
      exec(timeout + vlc, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          //return;
        }
      });

      resolve(new date());

      // if something fails,
      reject(new Error(error));
    });
};

function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}

//uvcvideo : pilote pour webcam (installé sur raspi de base)
function resetDevice(){
  exec('sudo modprobe -r uvcvideo', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      //return;
    }
  });
}

function refreshDevice(){
  exec('sudo modprobe uvcvideo', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      //return;
    }
  });
}
