import { Link } from "@remix-run/react";

export function Navbar() {
  return (
    <nav className="bg-transparent flex flex-wrap gap-4  justify-between items-center">
      <Link to="/" className="flex gap-2">
        <img
          src="/img/icons/hands.png"
          alt="elyyo homepage"
          className=" w-14 h-12"
        />
      </Link>

      <ul className="ml-auto md:m-0">
        <li className="bg-secondary text-white hover:bg-red-700 transition-all ease-in-out duration-300">
          <Link className="p-4" to="/">
            Programas
          </Link>
        </li>
      </ul>
    </nav>
  );
}
