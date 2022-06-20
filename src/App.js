import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./App.scss";
import AdminPage from "./pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
