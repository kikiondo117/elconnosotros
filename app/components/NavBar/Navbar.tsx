import { Link, useLocation } from "@remix-run/react";

export function Navbar() {
  const location = useLocation();

  if (location.pathname.includes("program")) {
    return (
      <nav className="flex flex-wrap items-center justify-between  gap-4 bg-transparent">
        <Link to="/" className="flex gap-2">
          <img
            src="/img/icons/hands.png"
            alt="elyyo homepage"
            className=" h-12 w-12 rounded-full bg-white"
          />
        </Link>

        <ul className="ml-auto md:m-0">
          <li className=" bg-gray-600 text-white transition-all duration-300 ease-in-out hover:bg-red-700">
            <Link className="p-4" to="/#programs">
              Programas
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="flex flex-wrap items-center justify-between  gap-4 bg-transparent">
      <Link to="/" className="flex gap-2">
        <img
          src="/img/icons/hands.png"
          alt="elyyo homepage"
          className=" h-12 w-12 rounded-full bg-white"
        />
      </Link>

      <ul className="ml-auto flex gap-4 md:m-0">
        <li className=" bg-gray-600 text-white transition-all duration-300 ease-in-out hover:bg-red-700">
          <Link className="p-4" to="#programs">
            Programas
          </Link>
        </li>

        <li className=" bg-gray-600 text-white transition-all duration-300 ease-in-out hover:bg-red-700">
          <Link className="p-4" to="#preachers">
            Predicadores
          </Link>
        </li>
      </ul>
    </nav>
  );
}
