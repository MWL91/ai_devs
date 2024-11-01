<?php

require_once __DIR__ . '/bootstrap.php';

$getKeys = function(): array
{
    $client = new GuzzleHttp\Client();
    $keysReq = $client->request('GET', 'https://poligon.aidevs.pl/dane.txt');
    return array_filter(explode(PHP_EOL, $keysReq->getBody()));
};

$resultReq = verifyTask("POLIGON", $getKeys());
dd(json_decode($resultReq->getBody()));