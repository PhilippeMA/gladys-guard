// Header
  var html = `
    Premier affichage TEST<br>
    <a href="https://api.netatmo.com/oauth2/authorize?client_id=58892ee2c49784b4bc8b7427&redirect_uri=http://192.168.2.115:8080/dashboard&scope=read_station.read_thermostat.write_thermostat&state=12081979">Première utilisation !</a>`;
  var footer = `::: Module super en cours de création :::`;
  
module.exports = {
  html: html,
  footer: footer
};
