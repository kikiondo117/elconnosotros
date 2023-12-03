import { Link, Outlet } from "@remix-run/react";
import { Navbar } from "~/components/NavBar/Navbar";

export default function HomeLayout() {
  return (
    <>
      <div className="mx-auto container px-4 tablet:px-0">
        <header className="py-4">
          <Navbar />
        </header>

        <Outlet />
      </div>

      <footer className="flex justify-around h-16">
        <p className="bg-black w-full text-sm md:text-base xl:w-1/4 text-white flex justify-end  items-center p-4">
          elyyo © 2023. Todos los derechos reservados.
        </p>
        <Link
          to="/nani"
          className="bg-gray-special w-full  xl:w-3/4 flex items-center p-4"
        >
          <p>Aviso de privacidad</p>
        </Link>
      </footer>
    </>
  );
}
