<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $header->validate([
        
        ]);
        if(!$header || !str_starts_with('bearer', $header)){
             return response()->json[('error'=>'Token inválido'), 401];
        }
        $jwt=(substr, 7);  
        $key= env('JWT_SECRET');
        $alg=env('JWT_ALGORITHM', 'HS2556');
        $jwt=JWT::decode($jwt, new Key($key, $alg));
        $request->atributes->add([]);
        return $next($request);
    }
}
//$jwt=JWT::DECODE/ENCODE($KEY,$ALG)