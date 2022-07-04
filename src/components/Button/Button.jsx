import React from "react";
import { StyledButton } from "./ButtonStyled";

const Button = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};

export default Button;
