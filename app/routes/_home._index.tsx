// * Assets
import * as programming from "~/utils/programacion";
// * Components

// * Custom Components
import { Player } from "~/components/Player/Player";
import { Section } from "~/components/Section/Section";
import { Host } from "~/components/Host/Host";
import { Post } from "~/components/Post/Post";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <section
        id="play"
        className="flex flex-col items-center my-12 md:flex-row md:justify-around md:my-24  md:h-[30rem]"
      >
        <div className="my-8 md:m-0">
          <Player />
        </div>
      </section>

      {/* ANCHOR Programas */}
      <section className="my-28">
        <Section title="Nuestros programas" subtitle="de lunes a domingo" />

        <div className="flex flex-wrap  justify-center mb-12 md:justify-between mt-12 gap-12">
          {programming.programas.map((programa) => {
            return (
              <Link
                to={`/program/${programa.id}`}
                key={programa.locutor}
                className={`bg-gray-special rounded-sm w-96 h-64 md:w-[25em] capitalize 
                 cursor-pointer bg-center ${programa.image}`}
              >
                <div className="h-full flex flex-col justify-end hover:translate-y-9 transition-all ease-in-out">
                  <p className="text-red-500 bg-white w-fit px-4 py-2 ">
                    <strong className="text-black">{programa.dia}</strong> -
                    {programa.hora}
                  </p>

                  <p className="bg-gray-800 w-fit text-white p-4">
                    {programa.nombre}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ANCHOR Hosts */}
      <section className="mb-12 mt-12">
        <Section title="Nuestros hosts" subtitle="EQUIPO DE RADIO CHILANGA" />

        <div className="flex flex-wrap justify-center gap-8  md:justify-between md:gap-0  mt-16">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.facebook.com/feliciano.veraromero.58"
          >
            <Host
              className="bg-manuel bg-center bg-cover"
              title="Gracias por el apoyo!"
              subTitle="Manuel Vera"
            />
          </a>

          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.tiktok.com/@kikis_404"
          >
            <Host
              className="bg-kikis bg-center bg-cover"
              title="Sin miedo al exito!"
              subTitle="kikis_404"
            />
          </a>
        </div>
      </section>

      {/* ANCHOR Information */}
      <section className="flex flex-wrap justify-center gap-4 my-12 md:gap-0  md:justify-between md:my-40">
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
              className="w-8 h-8"
              src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
              alt="facebook"
            />
          </a>
        </Post>
      </section>
    </>
  );
}

export const meta = () => {
  return [
    { title: "Radio Chilanga" },
    { name: "description", content: "Radio Mexican" },
  ];
};
