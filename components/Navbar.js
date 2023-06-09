import Link from "next/link";

const Navbar = () => (
  <nav className="navbar">
    <Link href="/" className="navbar-brand">
      Note App
    </Link>
    <Link href="/new" className="create">
      Create Note
    </Link>
  </nav>
);

export default Navbar;
