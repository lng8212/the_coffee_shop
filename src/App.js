import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./App.scss";
import AdminPage from "./pages/admin";
import BillDetail from "./pages/bill";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="bill/:id" element={<BillDetail />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
