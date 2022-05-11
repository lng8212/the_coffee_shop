import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import News from "./pages/news";
import Order from "./pages/order";
import "./App.scss";
import OrderDetail from "./pages/order/detail";
import NewsDetail from "./pages/news/detail";
import Checkout from "./pages/checkout";
import AdminPage from "./pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" />
          <Route path="blogs">
            <Route path=":idNews" element={<NewsDetail />} />
            <Route path="" element={<News />} />
          </Route>
          <Route path="products">
            <Route path=":idProduct" element={<OrderDetail />} />
            <Route path="" element={<Order />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
