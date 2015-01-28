//PREPARACIÓN ===============================================================

//Definición de las dependencias
var express  = require('express');
var request = require('request');

var app      = express(); 
var port     = process.env.PORT || 3000;


// Rutas
app.get("/cartelera", function(req, res) {

	var url='http://filmdate-filmdate.rhcloud.com/api/api.php/getCartelera';

	var request = require('request');

	request({url:url, json:"true"}, function (error, response, body) {

		if (!error && response.statusCode == 200) {

			console.log(body);
			res.json(body);
		}
		else {

			res.json({error:"request error"});
		}
	});

});

app.get("/pelicula/:titulo", function(req, res) {

	var url='http://filmdate-filmdate.rhcloud.com/api/api.php/getPelicula/'+req.params.titulo;

	var request = require('request');

	request({url:url, json:"true"}, function (error, response, body) {

		if (!error && response.statusCode == 200) {

			console.log(body);
			res.json(body);
		}
		else {

			res.json({error:"request error"});
		}
	});

});

// ARRANQUE DEL SERVIDOR ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
