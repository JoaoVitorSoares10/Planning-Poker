import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./Pages/home";
import { Register } from "./Pages/register";
import io from "socket.io-client";
import { useState } from "react";

const socket = io("http://localhost:3001/");

export function MyRoutes() {
    const [username, setUsername] = useState<string>("");
    const [room, setRoom] = useState<string>("");

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home 
              username={username} 
              socket={socket}
              room={room}
            />
          }/>
          <Route path="register" element={
            <Register 
              socket={socket} 
              username={username} 
              onSetUsername={setUsername}
              room={room} 
              onSetRoom={setRoom}
            />
          }/>
        </Routes>
      </BrowserRouter>
    );
  }