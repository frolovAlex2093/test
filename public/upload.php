<?php
$filename = 'file.txt';

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
file_put_contents($filename, $data, FILE_APPEND);
?>
