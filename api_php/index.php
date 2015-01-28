<?php

$peliculas="http://filmdate-filmdate.rhcloud.com/api/api.php/getPeliculas";

$resultaPelis=obtenerUrl($peliculas);

var_dump($resultaPelis);

echo "<br><br>";

$pelicula="http://filmdate-filmdate.rhcloud.com/api/api.php/getPelicula/Big%20Hero%206";

$resultaPelicula=obtenerUrl($pelicula);

var_dump($resultaPelicula);


function obtenerUrl($url){

	// Inicia sesión cURL
	$curl=curl_init($url);

	// Configura una opción para una transferencia cURL	
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

	// Establece una sesión cURL
	$data=curl_exec($curl);

	// Cierra una sesión cURL
	curl_close($curl);

	// Decodifica un string de JSON
	$search_results=json_decode($data);

	// Devuelve un array de resultados
	return $search_results;

} // Cierre de la función obtenerUrl

?>