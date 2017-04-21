<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class userController extends Controller
{
    public function getUserList()
    {
        $data = User::orderBy('name', 'asc')->get();
        return response(['data' => $data], 200);
    }
}
