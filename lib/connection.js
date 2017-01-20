var https = require("https");
const querystring = require('querystring');

var options = {
    hostname: 'api.netatmo.com',
    path: '/oauth2/token',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var params = querystring.stringify({'grant_type': "password",
    'username': "[USER_EMAIL]",
    'password': "[USER_PASSWORD]",
    'client_id':"[YOUR_APP_ID]",
    'client_secret': "[YOUR_CLIENT_SECRET]",
    'scope': "[SCOPE_SPACE_SEPARATED]"});

var callback = function(response) {
    response.on('error', function(e) {
        console.log('error', e);
    });
    var res = '';

    response.on('data', function (chunk) {
        res += chunk;
    });

    response.on('end', function () {
        res = JSON.parse(res);
        if (response.statusCode == '200') {
            var access_token = res.access_token;
            var refresh_token = res.refresh_token;
            var scope = res.scope;
            console.log("Your access_token is:", access_token);
            console.log("Your refresh_token is:", refresh_token);
            console.log("Your scopes are:", scope);
        } else {
            console.log('status code:', response.statusCode, '\n', res);
        }
    });
};


var req = https.request(options, callback);
req.on('error', function(e) {
    console.log('There is a problem with your request:', e.message);
});

req.write(params);
req.end();
