import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ServiceCardTitleStiled = styled.div`
	width: 100%;
	height: 46px;
	border-radius: 0px 0px 10px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.blurCard};
	backdrop-filter: blur(11px);
	font-family: "Raleway, 600, SemiBold", sans-serif;
	font-size: 14px;
	line-height: 22px;
	color: ${colors.font};
`;
