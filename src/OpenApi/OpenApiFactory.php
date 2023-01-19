<?php

namespace App\OpenApi;

use ApiPlatform\Core\OpenApi\OpenApi;
use ApiPlatform\Core\OpenApi\Model\PathItem;
use ApiPlatform\Core\OpenApi\Model\Operation;
use ApiPlatform\Core\OpenApi\Factory\OpenApiFactoryInterface;

class OpenApiFactory implements OpenApiFactoryInterface
{

    private  $decorated;

    public function __construct(OpenApiFactoryInterface $decorated)
    {
        $this->decorated = $decorated;
    }

    public function __invoke(array $context = []): OpenApi
    {
        $openApi = $this->decorated->__invoke($context);
        /** @var PathItem $path */

        foreach ($openApi->getPaths()->getPaths() as $key => $path) {
            if ($path->getGet() && $path->getGet()->getSummary() === "hidden") {
                $openApi->getPaths()->getPaths($key, $path->withGet(null));
            }
        }

        $schemas = $openApi->getComponents()->getSecuritySchemes();
        $schemas["bearerAuth"] = new \ArrayObject(["type" => "http", "scheme" => "bearer", "bearerFormat" => "JWT"]);
        $schemas = $openApi->getComponents()->getSchemas();
        $schemas["Credentials"] = new \ArrayObject([
        "type" => "object", 
        "properties" => [
            "username"=>["type" => "string", "exemple"=>"Scott Adkins"],
            "password"=>["type" => "string", "exemple"=>"password"]
        ]]);

        //  $openApi->getPaths()->addPath("/api/login", []);


        return $openApi;
    }
}