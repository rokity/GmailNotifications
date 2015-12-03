// reference the http module so we can create a webserver
var http = require("http");
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var CLIENT_ID="318397363032-iph6fi5unvirn1a0t73p995hgjn56i4d.apps.googleusercontent.com";
var CLIENT_SECRET="AccycYF2XYES5KTX-5hgeUfp";
var REDIRECT_URL="https://demo-project-rokity1.c9users.io/";
var TOKEN;


var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);


var scopes = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/gmail.compose'
  
];


var url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scope: scopes // If you only need one scope you can pass it as string
});




var express = require('express');
var app = express();


app.get('/', function (req, res) {
    if(req.query.code==null)
  res.send(url);
  else
  {
      oauth2Client.getToken(req.query.code, function(err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  if(!err) {
    oauth2Client.setCredentials(tokens);
    TOKEN=tokens;
  }
});
  }
});







var server = app.listen(process.env.PORT, function () {
  var host = process.env.IP;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


