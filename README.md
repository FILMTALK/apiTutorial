<h4>Requisitos</h4>
Se necesita crear un archivo llamado "<b>package.json</b>" para establecer las dependencias <b>express</b> y <b>request</b>.

Para instalar esas dependencias hay que hacer un <b> sudo npm install </b> en la terminal.

Y para ejecutar desde el terminal se utiliza el comando <b> node app.js </b>.

<br>
<h4>Código</h4>
```js

//Definición de las dependencias

var express  = require('express');
var request = require('request');

var app      = express(); 
var port     = process.env.PORT || 3000;


// Rutas

app.get("/cartelera", function(req, res) {

	// URL para obtener las películas en cartelera
	var url='http://filmdate-filmdate.rhcloud.com/api/api.php/getCartelera';

	var request = require('request');

	// Si la URL es un json devolverá los datos por pantalla y por consola
	request({url:url, json:"true"}, function (error, response, body) {

		if (!error && response.statusCode == 200) {

			console.log(body);
			res.json(body);
		}
		else { // Si la URL no es un json, devolverá error

			res.json({error:"request error"});
		}
	});

});

app.get("/pelicula/:titulo", function(req, res) {

	// URL para obtener los datos de una película
	var url='http://filmdate-filmdate.rhcloud.com/api/api.php/getPelicula/'+req.params.titulo;

	var request = require('request');

	// Si la URL es un json devolverá los datos por pantalla y por consola
	request({url:url, json:"true"}, function (error, response, body) {

		if (!error && response.statusCode == 200) {

			console.log(body);
			res.json(body);
		}
		else { // Si la URL no es un json, devolverá error

			res.json({error:"request error"});
		}
	});

});

// Arranque del servidor

app.listen(port);
console.log('The magic happens on port ' + port);
```
