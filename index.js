var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var data = req.headers;
	var operSys = "Not Found";
	var language = "Not Found";
	var ip = "Not Found";



	// determine operating system
	if (data["user-agent"].indexOf("Win")!=-1) {operSys="Windows"};
	if (data["user-agent"].indexOf("Mac")!=-1) {operSys="MacOS"};
	if (data["user-agent"].indexOf("X11")!=-1) {operSys="UNIX"};
	if (data["user-agent"].indexOf("Linux")!=-1) {operSys="Linux"};

	// set language
	language = data["accept-language"];

	// set ip
	ip = req.headers['x-forwarded-for'];

	var ans = {"ipaddress": ip, "language": language, "software": operSys};
    res.send(ans);
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


