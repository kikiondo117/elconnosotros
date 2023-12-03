// * Assets
import * as programming from "~/utils/programacion";
// * Components
import { LiaBibleSolid } from "react-icons/lia/index.js";
// * Custom Components
import { Player } from "~/components/Player/Player";
import { SectionBanner } from "~/components/SectionBanner/SectionBanner";
import { Host } from "~/components/Host/Host";
import { Post } from "~/components/Post/Post";
import { Link } from "@remix-run/react";
import { phrases } from "~/utils/phrases";

export default function Index() {
  return (
    <>
      {/* ANCHOR Player section */}
      <main
        id="play"
        className="my-12 flex flex-col items-center md:my-24 md:h-[30rem] md:flex-row  md:justify-around"
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className=" text-2xl font-semibold text-white">
            Bienvenidos a ElyYo
          </h1>
          <h2 className="text-white"> Tu Conexión Celestial en la Red</h2>

          <div className="h-56 w-56 overflow-hidden rounded-xl bg-red-500">
            <img src="/img/player/paloma.jpeg" />
          </div>
        </div>

        <div className="my-8 md:m-0">
          <Player />
        </div>
      </main>

      {/* ANCHOR Programs */}

      <section className="my-28">
        <SectionBanner
          title="Nuestros programas"
          subtitle="de lunes a domingo"
        />

        <div className="mb-12 mt-12  flex flex-wrap justify-center gap-12 md:justify-between">
          {programming.programas.map((programa) => {
            return (
              <Link
                to={`/program/${programa.id}`}
                key={programa.locutor}
                className={`h-64 w-96 cursor-pointer rounded-sm bg-gray-special bg-center 
                 capitalize tablet:w-96 ${programa.image}`}
              >
                <div className="flex h-full flex-col justify-end transition-all ease-in-out hover:translate-y-9">
                  <p className="w-fit bg-white px-4 py-2 text-red-500 ">
                    <strong className="text-black">{programa.dia}</strong> -
                    {programa.hora}
                  </p>

                  <p className="w-fit bg-gray-600 p-4 text-white">
                    {programa.nombre}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ANCHOR Day Phrase */}
      <section className="flex h-screen flex-col items-center justify-center gap-4 text-white">
        <h4 className="text-2xl text-yellow-300">Frase del dia</h4>
        <div className="flex max-w-md  items-center">
          <LiaBibleSolid className="text-9xl" />
          <em>{phrases[Math.floor(Math.random() * 10)]}</em>
        </div>
      </section>

      {/* ANCHOR Hosts */}
      <section className="mb-12 mt-12">
        <SectionBanner title="Nuestros equipo" subtitle="team" />

        <div className="mt-16 flex flex-wrap justify-center  gap-8 md:justify-between  md:gap-0">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.facebook.com/feliciano.veraromero.58"
          >
            <Host
              className="bg-manuel bg-cover bg-center"
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
              className="bg-kikis bg-cover bg-center"
              title="Sin miedo al exito!"
              subTitle="kikis_404"
            />
          </a>
        </div>
      </section>

      {/* ANCHOR Information */}
      <section className="my-12 flex flex-wrap justify-center gap-4 md:my-40  md:justify-between md:gap-0">
        <Post title="El y Yo">
          <p>
            Elyyo, donde el amor de Dios encuentra su eco en cada canción.
            ¡Bienvenidos a un viaje espiritual único, diseñado especialmente
            para ti!"
          </p>
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
