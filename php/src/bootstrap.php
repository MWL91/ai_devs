<?php

use Psr\Http\Message\ResponseInterface;
use Symfony\Component\Dotenv\Dotenv;

require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = new Dotenv();
$dotenv->load(__DIR__ . '/../.env');

function env(string $key): string {
    return $_ENV[$key];
}

function verifyTask(string $task, mixed $value): ResponseInterface {
    $client = new GuzzleHttp\Client();
    return $client->request('POST', 'https://poligon.aidevs.pl/verify', [
        'body' => json_encode(
            [
                'task' => $task,
                'apikey' => env('AI_DEVS_KEY'),
                'answer' => $value
            ]
        )
    ]);
}