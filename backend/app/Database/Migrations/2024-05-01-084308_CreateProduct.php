<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateProduct extends Migration
{
    public function up()
    {
        //

        $this->forge->addField([

            'id' => [
                'type' => 'INT',
                'constraint' => 5,
                'auto_increment' => true
            ],
            'productName' => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'Price' => [
                'type' => 'DOUBLE',
                'constraint' => '10,2',
            ],
            'QuantityInStock' => [
                'type' => 'INT',
                'constraint' => 100
            ],
            'PackagingType' => [
                'type' => 'ENUM("Box", "Sachet","Individual")'
            ],
            'UnitsPerPack' => [
                'type' => 'INT',
                'constraint' => 100
            ]

        ]);

        $this->forge->addKey('id',true);
        $this->forge->createTable('products');

    }

    public function down()
    {
        //
    }
}
