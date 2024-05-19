<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\API\Controller;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Validation\Exceptions\ValidationException;
use CodeIgniter\RESTful\ResourceController;
use App\Models\User;

class LoginController extends ResourceController
{
    use ResponseTrait;

    protected $userModel;

    public function __construct()
    {
        $this->userModel = new User();
    }

    // Authenticate user
    public function authenticate()
    {

        $json_data = $this->request->getJSON();

        $validation = \Config\Services::validation();
        $validation->setRules([
            'email' => 'required|valid_email', // Ensure email is required and valid
            'password' => 'required',
        ]);

        $email = $json_data->email;
        $password = $json_data->password;



        if (!$validation->withRequest($this->request)->run()) {
            // Validation failed, return error response
            return $this->failValidationErrors($validation->getErrors());
        } 
    
        // Perform authentication logic here (e.g., validate credentials against database)
        $user = $this->userModel->where('email', $email)->first();

        if (!$user || !password_verify($password, $user['password'])) {
            return $this->failUnauthorized('Invalid email or password');
        }

        // User authenticated successfully
        // You can return user data or a token here if using JWT or similar authentication
        return $this->respond([
            'success' => true,
            'message' => 'User authenticated successfully',
            'user' => $user
        ]);
    }

    // Register new user
    public function register()
    {
          // Validate the request data
          $validation = \Config\Services::validation();
          $validation->setRules([
              'email' => 'required|valid_email', // Ensure email is required and valid
              'password' => 'required',
              'fullName' => 'required'
          ]);
  
          if (!$validation->withRequest($this->request)->run()) {
              // Validation failed, return error response
              return $this->failValidationErrors($validation->getErrors());
          } 
       // Retrieve user data from the POST request
    
      // Get JSON data from the request
      $json = $this->request->getJSON();

      // Extract email and password from JSON
      $email = $json->email;
      $password = $json->password;
      $fullName = $json->fullName;
   

       // Hash the password
       $hashed_password = password_hash($password, PASSWORD_DEFAULT);
   
       // Create a new UserModel instance

   
       // Prepare user data array to insert into the database
       $user_data = [
           'email' =>  $email,
           'password' => $hashed_password,
           'fullName' => $fullName,
           'role' => 'staff'

           // Add other fields if necessary
       ];

         // Add debugging statements
 
    $user = $this->userModel->where('email', $email)->first();
       if (!$user) {
        // Get the insert ID
        // Registration successful
        if($this->userModel->save($user_data)){
            return $this->respond([
                'success' => true,
                'message' => 'User Registerd successfully',
            ]);
        }else{
            return $this->respond([
                'success' => false,
                'message' => 'There is a problem',
            ]);
        }
        
    } else {
        // Registration failed
        return $this->respond([
            'success' => false,
            'message' => 'Email Exists',
        ]);
    }
   }
}

