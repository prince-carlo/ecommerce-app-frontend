import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components";
import { Products, Home, NotFound } from "@/pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}