import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledTransparent = styled.button`
	padding: 12px 38px;
	border-radius: 10px;
	border: 1px solid ${colors.button};
	outline: none;
	background: transparent;
	font-family: "Raleway, 600, SemiBold", sans-serif;
	font-size: 14px;
	line-height: 20px;
	color: ${colors.font};
	cursor: pointer;

	:hover {
		background: ${colors.hoverTransparent};
	}
	:focus {
		background: ${colors.pressTransparent};
	}

	@media (max-width: 500px) {
		width: 100%;
	}
`;
