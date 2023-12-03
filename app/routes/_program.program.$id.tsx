import type { ProgramType } from "~/types/program";

import { redirect, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "react-router";
import { programas } from "~/utils/programacion";
import { Post } from "~/components/Post/Post";

export default function Programa() {
  const program: ProgramType = useLoaderData() as ProgramType;

  return (
    <div className="">
      <h1 className="my-8 flex justify-center p-4 text-4xl font-light text-white  md:my-24 md:text-6xl ">
        {program.nombre}
      </h1>

      <main className="flex h-fit min-h-screen flex-wrap justify-center gap-8 rounded-md bg-white p-8 py-16">
        <div>
          <div
            className={`${program.image} mx-auto h-96 w-full bg-center bg-no-repeat`}
          />

          <p className=" mx-auto mt-4 max-w-lg font-extralight">
            Todos los días, de <strong>{program.hora}</strong> , tienes una cita
            con <strong>{program.locutor}</strong>.{program.bio} . Puedes
            escuchar el programa en <strong>elconnosotros.com</strong>
          </p>
        </div>
      </main>

      {/* ANCHOR Information */}
      <section className="container mx-auto my-12 flex flex-wrap justify-center gap-4 md:my-40  md:justify-between md:gap-0">
        <Post title="Radio Chilanga">
          <p>
            Dándole un respiro a los habitantes de la Ciudad de México con
            programas clasicos desde la perspectiva más chilanga.
          </p>
        </Post>

        <Post title="CEO">
          <p>
            Nuestro objetivo es crear contenido digital de calidad. Planeamos
            ser una de las plataformas top de Latinoamericas.
          </p>
        </Post>

        <Post title="¡Síguenos!">
          <a
            className="flex items-center gap-4"
            target={"blank"}
            href="https://www.facebook.com/profile.php?id=100076177904911"
          >
            <img
              className="h-8 w-8"
              src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
              alt="facebook"
            />
          </a>
        </Post>
      </section>
    </div>
  );
}

export const loader: LoaderFunction = ({ params }) => {
  const id = params.id;
  if (id) {
    const program = programas.find((programa) => programa.id === +id);

    return program ? program : redirect("/");
  }

  return redirect("/");
};
