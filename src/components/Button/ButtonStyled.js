import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledButton = styled.button`
	padding: 12px 38px;
	background: ${colors.button};
	border-radius: 10px;
	border: none;
	outline: none;
	font-family: "Raleway, 600, SemiBold", sans-serif;
	font-size: 14px;
	line-height: 19.6px;
	color: ${colors.font};
	cursor: pointer;
	margin: 0 1rem 0 0;

	:hover {
		background: ${colors.hover};
	}

	:focus {
		background: ${colors.press};
	}
`;
