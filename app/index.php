<?php

include './vendor/autoload.php';

$base = __DIR__;
$storage = $base . '/storage';

$kirby = new Kirby([
    'roots' => [
        'index'    => __DIR__,
        'base'     => $base,
        'content'  => $base . '/content',
		'site'     => $base . '/site',
		'assets' => $base . '/assets',
        'media' => $base . '/media',
		'storage'  => $storage,
		'config' => $storage . '/config',
        'accounts' => $storage . '/accounts',
        'cache'    => $storage . '/cache',
        'sessions' => $storage . '/sessions'
    ]
]);

echo $kirby->render();