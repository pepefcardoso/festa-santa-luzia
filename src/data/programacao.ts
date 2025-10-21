import { Evento } from "@/types";

const programacao: Evento[] = [
    {
        id: "101",
        data: "08/12/2025",
        descricao: "Pescaria",
        dia: "Sábado",
        horario: "15:00",
        titulo: "Pescaria para Crianças",
        destaque: true,
        local: "Salão Igreja"
    },
    {
        id: "102",
        data: "13/12/2025",
        descricao: "Pipoca Doce",
        dia: "Domingo",
        horario: "19:30",
        titulo: "Pipoca doce com canela",
        destaque: false,
        local: "Salão Igreja Km 60"
    }
];

export default programacao;