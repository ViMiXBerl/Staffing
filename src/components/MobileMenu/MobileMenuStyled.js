import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Link } from "react-router-dom";

export const MobileMenuContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${colors.main};
	position: absolute;
	top: 100%;
	right: 0;
	color: ${colors.font};
	overflow-y: auto;
`;

export const LinkStyled = styled(Link)`
	font-family: "Raleway, 600, SemiBold", sans-serif;
	font-size: 18px;
	line-height: 28px;
	color: ${colors.font};
	text-decoration: none;
	padding: 0.6rem;
	width: 95%;
`;

export const SocialsWrapper = styled.div`
	display: flex;
	display: flex;
	justify-content: center;
	padding: 1rem;
`;

export const MobileDropDown = styled.div`
	display: flex;
	border-bottom: 1px solid ${colors.border};
	width: 100%;
	align-items: center;
`;

export const LinkWrapper = styled.div`
	width: 100%;
	border-bottom: 1px solid ${colors.border};
	display: flex;
	flex-direction: column;
`;
