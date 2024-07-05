import { ButtonProps } from "../../types/types";


const Button = ({ name, onClick = () => {}, className, buttonType = "button", disabled = false }: ButtonProps) => {
    return (
        <button
            type={buttonType}
            onClick={onClick}
            className={className}
            disabled={disabled}
        >
            {name}
        </button>
    );
}

export default Button;
