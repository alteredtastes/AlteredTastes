package com.alteredtastes.v1.websocket;

import io.netty.channel.Channel;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;

public class WebSocketServerHandler extends SimpleChannelInboundHandler<String> {

    private static final ChannelGroup channels = new DefaultChannelGroup();

    @Override
    public void handlerAdded(ChannelHandlerContext ctx) throws Exception {
        Channel incoming = ctx.channel();
        for (Channel channel : channels) {
            channel.write("[SERVER] - " + incoming.remoteAddress() + " has joined!\n" );
        }
        channels.add(ctx.channel());
    }

    @Override
    public void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
        Channel incoming = ctx.channel();
        for (Channel channel : channels) {
            channel.write("[SERVER] - " + incoming.remoteAddress() + " has left!\n" );
        }
        channels.remove(ctx.channel());
    }

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, String message) throws Exception {
        Channel incoming = channelHandlerContext.channel();
        for (Channel channel : channels) {
            if (channel != incoming) {
                channel.write("[" + incoming.remoteAddress() + "] " + message + "\n");
            }
        }
    }
}