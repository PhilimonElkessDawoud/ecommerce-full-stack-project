<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_instances', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('img', 2000);
            $table->string('description', 2000);
            $table->integer('qty');
            $table->float('price', 7, 2);
            $table->foreignId('user_id')->constrained();
            $table->foreignId('product_id')->constrained();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_instances');
    }
};
