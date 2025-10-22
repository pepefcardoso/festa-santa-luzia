import Image from "next/image";
import type { GaleriaFoto } from "@/types";

interface FotoCardProps {
    foto: GaleriaFoto;
    onClick: () => void;
}

export default function FotoCard({ foto, onClick }: FotoCardProps) {
    return (
        <div
            className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={onClick}
        >
            <Image
                src={foto.url}
                alt={foto.titulo}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hunter-green via-hunter-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-display font-semibold text-sm mb-1">
                    {foto.titulo}
                </p>
                <p className="text-white text-xs">{foto.categoria}</p>
            </div>
            <div className="absolute top-2 right-2 bg-bittersweet-shimmer text-white text-xs font-display font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                📸
            </div>
        </div>
    );
}