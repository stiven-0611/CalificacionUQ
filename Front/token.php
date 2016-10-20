<?php
// Step 6
$data = 'client_id=' . '46779082d184c98cdcdb' . '&' .
		'client_secret=' . '9256d52088a1631865ea4327b0c5fc1c4fcf6bd1' . '&' .
		'code=' . urlencode($_GET['code']);
		$url ='https://github.com/login/oauth/access_token?'.$data;

print_r($data);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);

preg_match('/access_token=([0-9a-f]+)/', $response, $out);
echo $out[1];
curl_close($ch);
//$ch = curl_init($url);
//curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//$response = curl_exec($ch);
//print_r($response);
//curl_close($ch);

?>