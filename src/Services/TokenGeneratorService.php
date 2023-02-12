<?php

namespace App\Services;


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

}