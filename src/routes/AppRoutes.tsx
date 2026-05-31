import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/shared/components";
import { Home } from "@/features/home/pages";
import { Products } from "@/features/products/pages"
import { NotFound } from "@/pages";

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