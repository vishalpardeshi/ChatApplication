<?php
 use App\User;
use App\Bear;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1 =  [
        	'name'  => 'vishal pardeshi',
        	'email'	=> 'vpardeshi419@gmail.com',
        	'password' =>Hash::make('password'),            
        ];        
        User::create($user1);
    }
}
