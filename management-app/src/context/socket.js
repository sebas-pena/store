import React from "react";
import socketio from "socket.io-client";

export const socket = socketio.connect(process.env.REACT_APP_SOCKET_URI);
export const SocketContext = React.createContext();