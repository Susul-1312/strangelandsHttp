const express = require("express");
const app = express();
const port = process.env.PORT | 80;

var server = app.listen(port, () => console.log(`Listening on Port ${port}`));

app.use(function (req, res, next) {
	console.log('Got Request, Time: %d', Date.now());
	next();
})

app.use(express.static('public'));


// since this catches everything, its important that it always stays at the bottom of the code
app.get("*", (req, res) => {
  res.sendFile(process.cwd() + '/public/404.html');
});
