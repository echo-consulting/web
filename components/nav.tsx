import { Link } from "react-router";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center mx-24 my-8">
      <div>
        <img src="/consultinglog.svg" alt="logo" className="h-16" />
      </div>
      <div className="flex gap-8 text-xl">
        <Link to="/" className="nav-link">
          Tjenester
        </Link>
        <Link to="/" className="nav-link">
          Prosjekter
        </Link>
        <Link to="/" className="nav-link">
          Om oss
        </Link>
      </div>
    </nav>
  );
}
