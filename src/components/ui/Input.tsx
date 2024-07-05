import { ChangeEvent } from "react";

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    id: string;
    name: string;
    placeholder?: string;
    className?: string;
}

function Input({
    value,
    onChange,
    type,
    id,
    name,
    placeholder,
    className
}: InputProps) {
    return (
        <input 
            type={type}
            value={value}
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
        />
    );
}

export default Input;
