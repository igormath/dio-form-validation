import { ButtonContainer } from "./style";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
    return (
        (disabled ? (
            <ButtonContainer onClick={onClick} disabled>{title}</ButtonContainer>
        ) : (
            <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
        ))
    );
}

export default Button;
