<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\Product;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Validation\Exceptions\ValidationException;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;

class InventoryController extends ResourceController
{

    use ResponseTrait;

    protected $productModel;

    public function __construct(){
        $this->productModel = new Product();
    }

    public function index()
    {
        $products = $this->productModel->findAll();

        return $this->response->setJSON($products);
    }

    public function storeProduct(){


        $json = $this->request->getJSON();


        $validation = \Config\Services::validation();
        $validation->setRules([
            'productName' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'packaging' => 'required',
            'units' => 'required'
        ]);


        if (!$validation->withRequest($this->request)->run()) {
            // Validation failed, return error response

            log_message('debug', print_r($validation->getErrors(), true));
            return $this->failValidationErrors($validation->getErrors());
        } 


        

        $product = $json->productName;
        $price = $json->price;
        $quantity = $json->quantity;
        $packaging = $json->packaging;
        $units = $json->units;


        $product_data = [
            'productName' => $product,
            'Price' => $price,
            'QuantityInStock' => $quantity,
            'PackagingType' => $packaging,
            'UnitsPerPack' => $units
        ];

        $saveProduct = $this->productModel->save($product_data);

        if($saveProduct){
            return $this->respond([
                'success' => true,
                'message' => 'Product Registerd successfully',
            ]);
        }else{
            return $this->respond([
                'success' => false,
                'message' => 'Something went wrong',
            ]); 
        }

      
    }

}
