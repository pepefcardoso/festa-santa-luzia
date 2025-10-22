import Link from "next/link";

interface CTAButtonProps {
    href: string;
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
}

export function CTAButton({
    href,
    variant = "primary",
    children,
    className = ""
}: CTAButtonProps) {
    const baseStyles = "font-display font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-lg";

    const variantStyles = {
        primary: "btn-primary",
        secondary: "bg-white text-hunter-green hover:bg-parchment"
    };

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}