<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateInventories extends Migration
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
            'productID' => [
                'type' => 'INT',
                'constraint' => 5,
            ],
            'StockInDate' => [
                'type' => 'INT',
                'constraint' => 100,
            ],
            'StockOutDate' => [
                'type' => 'INT',
                'constraint' => 100
            ],
            'Quantity' => [
                'type' => 'INT',
                'constraint' => 100
            ],
            'PackagingType' => [
                'type' => 'ENUM("Box", "Sachet","Individual")'
            ],
           

        ]);

        $this->forge->addKey('id',true);
        $this->forge->createTable('inventories');

    }

    public function down()
    {
        //
    }
}
