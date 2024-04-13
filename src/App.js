import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AccessesManagement from './pages/AccessesManagement';
import Category from "./pages/Category";
import CurrentInventory from "./pages/CurrentInventory";
import Delivery from "./pages/Delivery";
import Financial from "./pages/Financial";
import Logs from "./pages/Logs";
import Orders from "./pages/Orders";
import PartsOfUsers from "./pages/PartsOfUsers";
import Product from "./pages/Product";
import ReportsOfOrders from "./pages/ReportsOfOrders";
import Store from "./pages/Store";
import StoreManagement from "./pages/StoreManagement";
import Users from "./pages/Users";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AccessesManagement" element={<AccessesManagement />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/CurrentInventory" element={<CurrentInventory />} />
            <Route path="/Delivery" element={<Delivery />} />
            <Route path="/Financial" element={<Financial />} />
            <Route path="/Logs" element={<Logs />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/PartsOfUsers" element={<PartsOfUsers />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/ReportsOfOrders" element={<ReportsOfOrders />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/StoreManagement" element={<StoreManagement />} />
            <Route path="/Users" element={<Users />} />
          </Routes>
        </Sidebar>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
