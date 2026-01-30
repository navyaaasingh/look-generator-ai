import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-neutral-800">
      <Link
        to="/"
        className="text-lg font-semibold tracking-tight"
      >
        AI Look Generator
      </Link>

      <div className="flex gap-8 text-sm">
        <Link
          to="/"
          className={`transition ${
            pathname === "/"
              ? "text-white"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/generate"
          className={`transition ${
            pathname === "/generate"
              ? "text-white"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Generate
        </Link>
      </div>
    </nav>
  );
}
