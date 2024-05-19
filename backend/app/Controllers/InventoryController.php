<?php

namespace App\Controllers;

use App\Controllers\BaseController;

use CodeIgniter\HTTP\ResponseInterface;

class InventoryController extends BaseController
{
    public function index()
    {
        //
    }

    public function storeProduct(){

        $validation = \Config\Services::validation();
        $validation->setRules([
            'productName' => 'required',
            'Price' => 'required',
            'QuantityInStock' => 'required',
            'PackagingType' => 'required',
            'UnitsPerPack' => 'required'
        ]);

        $json = $this->request->getJSON();

      
    }

}
