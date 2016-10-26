var express = require('express');
var bodyParser = require('body-parser');
var users = require('./users.json');
var app = express();


app.use(bodyParser.json());
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
app.get('/api/users', function(req, res, next){var response = [];var languageParam=req.param('language');if(languageParam){for(var user in users){if(users[user].language===languageParam){response.push(users[user])}}}else{response=users}res.json(response);});
app.get('/api/users/:type', function(req, res, next){var response = [];var privilege = req.params.type;if (privilege) {for (var user in users) {if (users[user].type === privilege){response.push(users[user])}}}else{response = users}res.json(response);});
app.post('/api/users', function(req, res, next){
var user = req.body.user
console.log(req.body.user);
  res.send(user)
});


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//





var port = 3000;

app.listen(port, function(){
  console.log("we are in port:", port);
});
