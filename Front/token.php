<?php
// Step 6
$data = 'client_id=' . '46779082d184c98cdcdb' . '&' .
		'client_secret=' . 'dfa919ee58a2c6ea1969ea7e4806d73d4f916da0' . '&' .
		'code=' . urlencode($_GET['code']);

$ch = curl_init('https://github.com/login/oauth/access_token');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);

preg_match('/access_token=([0-9a-f]+)/', $response, $out);
echo $out[1];
curl_close($ch);
?>
