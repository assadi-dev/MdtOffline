<?php

namespace App\Services;

use Exception;


class TokenGeneratorService{

    private $secret;
    public function __construct($secret)
    {

        $this->secret = $secret;
    }

    public function generateToken($payload)
    {

        // Create token header as a JSON string
        $header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);

        // Create token payload as a JSON string
        $payload = json_encode($payload);

        // Encode Header to Base64Url String
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));

        // Encode Payload to Base64Url String
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));


        // Create Signature Hash
        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $this->secret, true);

        // Encode Signature to Base64Url String
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

        // Create JWT
        $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

        //Output
        return $jwt;
    }

    public function verifTocken($token){


try {
    $jwtHeader = $this->getHeaderToken($token);
    $jwtPayload = $this->getPayloadToken($token);

    //Regenerate token
    $verifToken = $this->generateToken($jwtPayload);
    return  $verifToken == $token;
} catch (\Throwable $th) {
   return "Invalid JWT Token ";
}



    }

    public function getHeaderToken($token){

        $tokenParts = explode(".", $token);  
        $tokenHeader = base64_decode($tokenParts[0]);
        $jwtHeader = json_decode($tokenHeader,true);
        return  $jwtHeader;

    }

    public function getPayloadToken($token){

        $tokenParts = explode(".", $token);  
        $tokenPayload = base64_decode($tokenParts[1]);
        $jwtPayload = json_decode($tokenPayload,true);
        return  $jwtPayload;

    }

    public function rgenerateToken($header,$payload,$secret)
    {

    }

}