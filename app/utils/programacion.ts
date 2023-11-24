import type { ProgramType } from "~/types/program";

export const days: any = {
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
  0: "domingo",
};

export const programas: ProgramType[] = [
  {
    id: 12,
    hora: "8:00 p.m - 9:00 p.m",
    nombre: "Hombres de Valor",
    locutor: "Israel Herrera Vera +5523291181",
    image: "bg-radio2",
    bio: `
    Programas centrados en aspectos cotidianos de la vida masculina, abordando temas como la toma de decisiones sabias, la conducción de nuestras vidas según la palabra, la superación de problemas en la pareja, la crianza de los hijos y la relación con la iglesia. 
    Exploraremos mi rol como líder de la familia. Sintoniza para obtener consejos valiosos y reflexiones que te ayudarán a navegar por los desafíos de la vida diaria.

    `,
  },
  {
    id: 13,
    hora: "9:00 p.m - 10:00 p.m",
    nombre: "VIDA EN ABUNDANCIA",
    locutor: "Eliseo Tapia ",
    image: "bg-radio2",
    bio: `
    El programa radial "Vida en Abundancia" tiene como objetivo principal brindar un espacio en el que las personas mayores de 35 años encuentren contenido relevante y enriquecedor para su vida espiritual, emocional y física. A través de segmentos cuidadosamente diseñados, abordaremos temas de salud, música cristiana, evangelismo, cultura y psicología, buscando proporcionar una experiencia integral que promueva una vida plena.
    OBJETIVOS:
    .	Compartir nuestra Fe: 
    A través de mensajes evangelísticos, buscamos predicar el evangelio a nuestros oyentes y conozcan el mensaje del evangelio de Jesucristo.
    .	Promover la Salud Integral: 
    Ofreceremos información y consejos prácticos sobre salud física y emocional, fomentando hábitos saludables y el bienestar general.
    .	Celebrar la Cultura Cristiana: 
    Destacaremos la riqueza cultural del cristianismo a través de la música, eventos y entrevistas con líderes de la comunidad cristiana.
    .	Brindar Apoyo Psicológico:
    Abordaremos temas de relevancia psicológica, proporcionando orientación y apoyo emocional para enfrentar situaciones difíciles.
    .	Fomentar la Participación Social:
    Invitaremos a la audiencia a participar activamente en la comunidad, promoviendo eventos, proyectos sociales y actividades beneficiosas para el entorno.
    Pastores:
    Luis Walle en Guadalajara
    Miguel Zermeño en León Gto.
    Silver Martínez en Boca del Río Veracruz
    Eliseo Tapia en Ixtapaluca Estado de México
    Y Luis Rodas en Argentina.
    `,
  },
];
