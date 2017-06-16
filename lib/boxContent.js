var shared = require('./shared.js')

// Header
var html = `
Dernière capture vidéo :<br>

<video width="400" controls="controls">
  <source src="/video/output.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video><br><br>
<center><button onClick="var t = this; t.disabled = true; setTimeout(function() {t.disabled = false;},20000);">Capture now !</button></center>`;
// footer
var footer = `::: Module en cours de création :::`;

module.exports = {
	  html: html,
	  footer: footer
};
