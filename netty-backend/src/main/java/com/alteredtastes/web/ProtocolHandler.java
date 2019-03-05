package com.alteredtastes.web;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpHeaders;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.websocketx.PingWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketServerHandshaker;
import io.netty.handler.codec.http.websocketx.WebSocketServerHandshakerFactory;

public class ProtocolHandler extends ChannelInboundHandlerAdapter {

    WebSocketServerHandshaker handshaker;

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) {
        try {
            if (msg instanceof HttpRequest) {
                if (isWebSocketUpgrade((HttpRequest) msg)) {
                    handleSocketUpgrade(ctx, (HttpRequest) msg);
                } else {
                    System.out.println("Got here");
                }
            } else {
                Class c = msg.getClass();
                System.out.println(c.getName() );
            }
        } catch (Exception e) { e.printStackTrace(); }
    }

    private void handleSocketUpgrade(ChannelHandlerContext ctx, HttpRequest req) {
        HttpHeaders headers = req.headers();
        System.out.println("Http Request Received");
        System.out.println("Connection : " +headers.get("Connection"));
        System.out.println("Upgrade : " + headers.get("Upgrade"));
        ctx.pipeline().replace(this, "websocketHandler", new WebSocketHandler());
        System.out.println("WebSocketHandler added to the pipeline");
        System.out.println("Opened Channel : " + ctx.channel());
        System.out.println("Handshaking....");
        handleHandshake(ctx, req);
        System.out.println("Handshake is done");
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.flush();
    }

    private boolean isWebSocketUpgrade(HttpRequest req) {
        return ("Upgrade".equalsIgnoreCase(req.headers().get(HttpHeaderNames.CONNECTION)) && "WebSocket".equalsIgnoreCase(req.headers().get(HttpHeaderNames.UPGRADE)));
    }

    private void handleHandshake(ChannelHandlerContext ctx, HttpRequest req) {
        WebSocketServerHandshakerFactory wsFactory = new WebSocketServerHandshakerFactory(getWebSocketURL(req), null, true);
        handshaker = wsFactory.newHandshaker(req);
        if (handshaker == null) {
            WebSocketServerHandshakerFactory.sendUnsupportedVersionResponse(ctx.channel());
        } else {
            handshaker.handshake(ctx.channel(), req);
        }
    }

    private String getWebSocketURL(HttpRequest req) {
        System.out.println("Req URI : " + req.getUri());
        String url =  "ws://" + req.headers().get("Host") + req.getUri() ;
        System.out.println("Constructed URL : " + url);
        return url;
    }
}