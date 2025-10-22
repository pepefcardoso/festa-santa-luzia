import type { ChangeEvent } from "react";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    name: string;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormField({
    label,
    id,
    ...props
}: FormFieldProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-display font-semibold text-hunter-green mb-2"
            >
                {label} * </label>
            <input
                id={id}
                {...props}
                className="w-full px-4 py-3 rounded-lg border-2 border-hunter-green-800 focus:border-asparagus focus:outline-none transition-colors"
            />
        </div>
    );
}