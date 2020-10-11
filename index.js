const express = require("express");
const app = express();
const port = process.env.PORT | 80;

var server = app.listen(port, () => console.log(`Listening on Port ${port}`));

app.use(function (req, res, next) {
	console.log('Got Request, Time: %d', Date.now());
	next();
})

app.use(express.static('public'));

app.get("*", (req, res) => {
  res.sendFile(process.cwd() + '/public/404.html');
});
