import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./Pages/home";
import { Register } from "./Pages/register";

export function MyRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }