// Importing express js
const express = require("express");

// creating express app instance 

const app = express();

// Port initializing in express

const port = 3000;


//check whether the port is listening or connecting
app.listen(port, (err) => {
	if(err) {
		console.log(err);
	}
	console.log("server is listening in port no", port);
});

app.get('/', (req, res) => {
  res.send('Welcome to Isai Aruvi')
})