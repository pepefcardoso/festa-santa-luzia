import type { ReactNode } from "react";

interface PremioCardProps {
    titulo: ReactNode;
    valor: ReactNode;
    icone: ReactNode;
    className?: string;
    isDestaque?: boolean;
}

export default function PremioCard({
    titulo,
    valor,
    icone,
    className = "",
    isDestaque = false,
}: PremioCardProps) {
    const baseClasses = "rounded-lg p-6 shadow-lg flex items-center gap-4";
    const destaqueClasses = isDestaque ? "transform -translate-y-4 ring-4 ring-white/50" : "";

    const iconeContainerClasses = `
        ${isDestaque ? "w-16 h-16" : "w-14 h-14"}
        bg-white rounded-full flex items-center justify-center shadow-inner
    `;
    const iconeSpanClasses = isDestaque ? "text-3xl" : "text-2xl";

    return (
        <div className={`${baseClasses} ${destaqueClasses} ${className}`}>
            <div className={iconeContainerClasses}>
                <span className={iconeSpanClasses}>{icone}</span>
            </div>
            <div>
                {titulo}
                {valor}
            </div>
        </div>
    );
}