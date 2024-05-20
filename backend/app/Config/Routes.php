<?php

use CodeIgniter\Router\RouteCollection;


/**
 * @var RouteCollection $routes
 */
$routes->get('/home', 'Home::index');


    // Routes for authentication
    $routes->post('/login', 'LoginController::authenticate');

    // Routes for registration
    $routes->post('/register', 'LoginController::register',['filter','cors']);
    $routes->post('authenticate', 'LoginController::authenticate');
    $routes->get('/logout','LoginController::logout');
    $routes->post('registerProduct','InventoryController::storeProduct');
    $routes->get('/products','InventoryController::index');
   

