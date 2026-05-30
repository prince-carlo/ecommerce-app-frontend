import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components";
import Home from "@/pages/Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}