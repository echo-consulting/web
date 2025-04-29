import { Link } from "react-router";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center mx-24 my-8 text-white fixed top-0 left-0 right-0 z-20">
      <div>
        <Link to="/">
          <img src="/consultinglog.svg" alt="logo" className="h-16" />
        </Link>
      </div>
      <div className="flex gap-8 text-xl">
        <Link to="/tjenester" className="nav-link">
          Tjenester
        </Link>
        {/* <Link to="/prosjekter" className="nav-link">
          Prosjekter
        </Link>
        <Link to="/om-oss" className="nav-link">
          Om oss
        </Link> */}
      </div>
    </nav>
  );
}
