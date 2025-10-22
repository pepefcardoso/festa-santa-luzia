interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
        </>
    );
}