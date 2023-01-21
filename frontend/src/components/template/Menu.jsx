import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-dark bg-dark rounded">
      <div className="container">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">
            <i className="fa fa-calendar-check-o"></i> TodoApp
          </a>
        </div>

        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link navbar-brand" to="/todos">
              Todos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navbar-brand" to="/about">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
