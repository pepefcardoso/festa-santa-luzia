import Image from "next/image";
import type { Patrocinador } from "@/types";

interface PatrocinadorCardProps {
    patrocinador: Patrocinador;
}

export default function PatrocinadorCard({
    patrocinador,
}: PatrocinadorCardProps) {
    const content = patrocinador.logo ? (
        <div className="relative w-full h-32 rounded-lg shadow-lg overflow-hidden">
            <Image
                src={`/${patrocinador.logo}`}
                alt={`Logo de ${patrocinador.nome}`}
                fill
                className="object-cover"
            />
        </div>
    ) : (
        <div className="w-32 h-32 bg-hunter-green-800 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl text-white font-bold">
                {patrocinador.nome.charAt(0)}
            </span>
        </div>
    );

    return (
        <div className="transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center">
            {patrocinador.site ? (
                <a
                    href={patrocinador.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    {content}
                </a>
            ) : (
                <div className="w-full">{content}</div>
            )}
        </div>
    );
}