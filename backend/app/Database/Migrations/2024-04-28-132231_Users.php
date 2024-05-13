<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

class Users extends Migration
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
            'fullName' => [
                'type'=> 'VARCHAR',
                'constraint' => 255,
            ],
            'email' => [
                'type'=> 'VARCHAR',
                'constraint' => 255,
            ],
            'password' => [
                'type'=> 'VARCHAR',
                'constraint' => 255,
            ],
            'status' => [
                'type'=> 'INT',
                'constraint' => 5,
                'default' => 0,
            ],
            'role' => [
                'type'=> 'VARCHAR',
                'constraint' => 255,
            ],
            'created_at' => [
                'type'=> 'TIMESTAMP',
                'default' => new RawSql('CURRENT_TIMESTAMP'),
            ],
            'updated_at'=> [
                'type'=> 'TIMESTAMP',
                'null' => true,
                'default' => NULL,
                'on update CURRENT_TIMESTAMP' => true,

            ]
        ]);

        $this->forge->addKey('id',true);
        $this->forge->createTable('users');


    }


    public function down()
    {
        //
    }
}
