<?php

ini_set('display_errors',0);

$headers=apache_request_headers();

header('Content-Type: application/json');
echo json_encode(array(
	'status' => (strpos($headers['Content-Type'],'*/*')===0 && file_get_contents('php://input')=='text')?'ok':'error',
	'debug' => array(
		'Content-Type' => $headers['Content-Type'],
		'php://input' => file_get_contents('php://input')
	)
));