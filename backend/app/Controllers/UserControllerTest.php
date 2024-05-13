<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;


use PHPUnit\Framework\TestCase;
use GuzzleHttp\Client;

class UserControllerTest extends TestCase
{
    public function testRegistration()
    {
        $client = new Client();
        $response = $client->post('/register', [
            'email' => 'test@example.com',
            'password' => 'password123',
        ]);

        $this->assertEquals(201, $response->getStatusCode());

        // Assert JSON response
        $responseData = json_decode($response->getBody(), true);
        $this->assertEquals('User created successfully', $responseData['message']);
    }
}
