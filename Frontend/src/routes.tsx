import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./Pages/home";
import { Register } from "./Pages/register";
import { useState } from "react";

export function MyRoutes() {
    const [username, setUsername] = useState<string>("");
    const [room, setRoom] = useState<string>("");

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home 
              username={username} 
              room={room}
            />
          }/>
          <Route path="register" element={
            <Register 
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