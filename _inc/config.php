<?php

// show all errors
ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);


// require stuff
require_once 'vendor/autoload.php';

//global variable
$base_url = 'http://localhost/todoapp';

// Using Medoo namespace
use Medoo\Medoo;

// connect to db
$database = new Medoo([
	'database_type' => 'mysql',
	'database_name' => 'todo',
	'server'        => 'localhost',
	'username'      => 'root',
	'password'      => 'root',
	'charset'       => 'utf8'
]);