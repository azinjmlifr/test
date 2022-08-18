import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Categories from "../pages/Categories";
import Orders from "../pages/adminPages/Orders";
import PriceAndStock from "../pages/adminPages/PriceAndStock";
import ProductManagement from "../pages/adminPages/ProductManagement";
import Basket from "../pages/Basket";
import Dashboard from "../pages/Dashboard";
import HomeLayout from "../layout/homeLayout";
import AdminLayout from "../layout/adminLayout";
// const LazyAbout = React.lazy(() => import("./pages/About"));
function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path=":categories/:cardInfo" />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route path="/admin/orders" element={<Orders />}></Route>
          <Route
            path="/admin/priceAndstock"
            element={<PriceAndStock />}
          ></Route>
          <Route
            path="/admin/productManagement"
            element={<ProductManagement />}
          ></Route>
        </Route>
        <Route path="basket" element={<Basket />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoute;
