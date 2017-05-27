// Header
var html = `
Dernière capture vidéo :<br>

<video width="400" controls>
  <source src="/video/output.ogg" type="video/ogg">
  Your browser does not support HTML5 video.
</video>

<p>Ajouter date et heure de la capture...</p>`;

var footer = `::: Module en cours de création :::`;
	  
module.exports = {
	  html: html,
	  footer: footer
};
