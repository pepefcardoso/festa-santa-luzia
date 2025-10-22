interface CategoryTitleProps {
    label: string;
    color: string;
}

export default function CategoryTitle({ label, color }: CategoryTitleProps) {
    return (
        <div className="text-center mb-8">
            <h3
                className={`inline-block text-2xl font-display font-bold text-white px-8 py-3 rounded-full bg-gradient-to-r ${color} shadow-lg`}
            >
                {label}
            </h3>
        </div>
    );
}