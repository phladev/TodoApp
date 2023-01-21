import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Todo from "../pages/Todo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/todos" element={<Todo />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Todo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
