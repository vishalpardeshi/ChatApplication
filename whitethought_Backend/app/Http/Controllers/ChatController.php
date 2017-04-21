<?php

namespace App\Http\Controllers;

use App\Chat;
use App\Http\Requests;
use Illuminate\Http\Request;
use Auth;

class ChatController extends Controller
{
    public function getUserConversationById (Request $request)
    {
        $defaultValue = 1;
        $userId = $request->input('id');
        $authUserId =1;
        $chats = Chat::whereIn('sender_id', [$authUserId,$userId])
            ->whereIn('receiver_id', [$authUserId,$userId])
            ->orderBy('created_at', 'desc')
            ->get(); 
                           
        return response(['data' => $chats], 200);
    }
}
