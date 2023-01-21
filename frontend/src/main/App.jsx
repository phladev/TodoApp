import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../styles/Custom.css";
import Menu from "../components/template/Menu";
import AppRoutes from "./routes";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <AppRoutes />
    </div>
  );
}
