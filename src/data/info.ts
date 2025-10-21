import { InfoFesta } from "@/types";

const infofesta: InfoFesta = {
  titulo: process.env.NEXT_PUBLIC_SITE_TITLE || "Titulo", 
  coordenadas: {
    lat: -28.468774,
    lng: -49.067854,
  },
  endereco: {
    cep: "88702-874",
    cidade: "Tubarão",
    estado: "SC",
    bairro: "KM 60",
    numero: "4151",
    rua: "SC-390",
  },
  dataInicio: "08/12/2025",
  dataFim: "13/12/2025",
  dataFrase: "8 a 13 de Dezembro de 2025",
  redesSociais: {
    facebook: "https://www.facebook.com/CapelaSantaLuziaKm60/?locale=pt_BR",
    instagram: "https://www.instagram.com/capelasantaluziakm60/",
    youtube: "https://www.youtube.com/@capelasantaluziakm60",
  },
};

export default infofesta;
