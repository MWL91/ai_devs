<?php

require_once __DIR__ . '/bootstrap.php';

$client = new GuzzleHttp\Client();
$keysReq = $client->request('GET', 'https://poligon.aidevs.pl/dane.txt');
$keys = array_filter(explode(PHP_EOL, $keysReq->getBody()));

$resultReq = verifyTask("POLIGON", $keys);

dd($keys, json_decode($resultReq->getBody()));