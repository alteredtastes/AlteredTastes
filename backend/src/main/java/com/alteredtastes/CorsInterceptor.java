package com.alteredtastes;

import org.wso2.msf4j.Request;
import org.wso2.msf4j.Response;
import org.wso2.msf4j.interceptor.ResponseInterceptor;

public class CorsInterceptor implements ResponseInterceptor {

    private String headerName = "Origin";
    private String allowOriginHeader = "Access-Control-Allow-Origin";

    @Override
    public boolean interceptResponse(Request request, Response response) throws Exception {

        response.setHeader(allowOriginHeader, "3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers",
                "Origin, Content-Type, Accept, X-Requested-With, remember-me, Authorization");

        if (request.getHeader(headerName) != null && !request.getHeader(headerName).isEmpty()) {
            response.setHeader(allowOriginHeader, request.getHeader(headerName));
        }
        return true;
    }
}
