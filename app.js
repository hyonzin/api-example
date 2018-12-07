var express = require('express');
var app = express();
var port_num = 3000;


app.use(express.static(__dirname + '/static')); 


/* Coffee */

var coffee = [];

app.get('/api/v1.0/coffee', function (req, res) {
	// get all coffees
	res.json({coffee: coffee, error: 0});
});

app.post('/api/v1.0/coffee/:name', function (req, res) {
	var name = req.params.name;

	// check value
	if (name == null || name == "") {
		res.json({error: -1});
		return;
	}

	// find the coffee
	var idx = coffee.indexOf(name);

	// return if it already exists
	if (idx != -1) {
		res.json({error: -2});
		return;
	}

	// add new coffee
	coffee.push(name);

	// return code
	res.json({error: 0});
});

app.delete('/api/v1.0/coffee/:name', function (req, res) {
	var name = req.params.name;

	// check value
	if (name == null || name == "") {
		res.json({error: -1});
		return;
	}

	// find the coffee
	var idx = coffee.indexOf(name);

	// return if it doesn't exist
	if (idx == -1) {
		res.json({error: -2});
		return;
	}

	// delete the coffee
	coffee.splice(idx, 1);

	// return code
	res.json({error: 0});
});

app.listen(port_num, function () {
	console.log('Listening on port ' + port_num);
});

