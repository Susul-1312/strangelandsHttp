const express = require("express");
const app = express();

var server = app.listen(8080, () => console.log("Listening on Port 8080"));

app.use(function (req, res, next) {
	console.log('Got Request, Time: %d', Date.now());
	next();
})

app.use(express.static('public'));

app.get("*", (req, res) => {
  res.sendFile(process.cwd() + '/public/404.html');
});
