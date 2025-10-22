interface HeroBadgeProps {
    text: string;
}

export function HeroBadge({ text }: HeroBadgeProps) {
    return (
        <div className="inline-block mb-6">
            <span className="bg-parchment text-hunter-green font-display font-semibold px-6 py-2 rounded-full text-sm shadow-lg">
                {text}
            </span>
        </div>
    );
}