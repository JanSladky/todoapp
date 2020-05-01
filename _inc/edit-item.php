<?php

// include
	require_once 'config.php';


	// add new stuff
	$affected = $database->update('items',
		[ 'text' => $_POST['message'] ],
		[ 'id' => $_POST['id'] ]
	);

	// success
	if ( $affected ) {
		header("Location: $base_url/index.php");
		die();
	}