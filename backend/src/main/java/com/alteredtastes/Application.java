package com.alteredtastes;

import org.wso2.msf4j.MicroservicesRunner;

public class Application {
    public static void main(String[] args) {
        new MicroservicesRunner(9090)
                .deployWebSocketEndpoint(new WebSocketService())
                .deploy(new RestAPIService())
//                .deploy(new StaticFileService())
                .addGlobalResponseInterceptor(new CorsInterceptor())
                .start();
    }
}