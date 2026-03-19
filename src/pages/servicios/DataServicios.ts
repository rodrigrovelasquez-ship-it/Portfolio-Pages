import type { IServicio } from "./ServicioCard";

const DatasServicios: IServicio[] = [
  {
    id: 1,
    title: "Funcion de fibra",
    categoria: "Redes de comunicacion",
    description: "Funcion de fibra en el instituto",
    img: "https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/fiber-optic-cable.jpg",
    tecnologias: ["Fibra optica", "Cableado estructurado", "Redes"],
  },
  {
    id: 2,
    title: "Configuracion de router Cisco",
    categoria: "Redes de comunicacion",
    description: "Configuracion de router Cisco en el instituto",
    img: "https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/fiber-optic-cable.jpg",
    tecnologias: ["Routers", "DevOps", "Cisco ASIR"],
  },
  {
    id: 3,
    title: "Desarrollo de una pagina web",
    categoria: "Desarrollo web",
    description: "Desarrollo de una pagina web en el instituto",
    img: "https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/fiber-optic-cable.jpg",
    tecnologias: ["Microservicios", "NestJS", "Redes Nats"],
  },
];

export default DatasServicios;