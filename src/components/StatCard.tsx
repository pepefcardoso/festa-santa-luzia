interface StatCardProps {
    emoji: string;
    title: string;
    description: string;
}

export function StatCard({ emoji, title, description }: StatCardProps) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-2">{emoji}</div>
            <p className="text-white font-display font-semibold mb-1">{title}</p>
            <p className="text-white text-sm">{description}</p>
        </div>
    );
}