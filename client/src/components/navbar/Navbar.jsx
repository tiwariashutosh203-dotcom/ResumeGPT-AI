import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          ResumeGPT AI
        </Link>

        {/* Navigation */}
        <div className="flex gap-6">

          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="hover:text-blue-600"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;