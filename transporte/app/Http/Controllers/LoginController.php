<?php

namespace App\Http\Controllers;
use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Exception;
use Illuminate\Http\Request;

class LoginController extends Controller
{ //User::where()
    public function login(){
        $user->validate([
            'email'=>'required|email',
            'password'=>'required'
        ]);
        if(!$user || Hash($user->password, $request->password)){
            return response()->json(['error'=>'Credenciales incorrectas'], 401);
        }
        $key=env('JWT_SECRET');
        $alg=env('JWT_ALGORITHM');
        $payload=[
            'iat'=>time(),
            'exp'=>time()+3600,
            'data'=>[
                id=>$user->id,
                email=>$user->email
            ]
        ];
        $decoder=JWT::decode($jwt, $key, $alg);
    }
}
