<?php
include_once("index.html"); 
$url = parse_url(getenv("mysql://b1c8fef3da3794:5b9b40b6@us-cdbr-iron-east-01.cleardb.net/heroku_75916913ce210ba?reconnect=true"));

$server = $url["us-cdbr-iron-east-01.cleardb.net"];
$username = $url["b1c8fef3da3794:5b9b40b6"];
$password = $url["5b9b40b6"];
$db = substr($url["heroku_75916913ce210ba"], 1);

$conn = new mysqli($server, $username, $password, $db);
?>
