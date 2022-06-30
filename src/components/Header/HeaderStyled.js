import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

export const HeaderStyled = styled.header`
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: transparent;
	z-index: 3;
	margin: 1rem 0;
`;

export const HeaderWrapper = styled.div`
	width: 85%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SocialsWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const SocialLink = styled.a`
	margin: 0 1rem 0 0;
	width: 28px;
	height: 28px;
`;

export const LinksWrapper = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-around;
`;

export const LinkStyled = styled(Link)`
	font-family: "Raleway, 600, SemiBold", sans-serif;
	font-size: 16px;
	line-height: 22px;
	text-decoration: none;
	color: ${colors.font};
`;

export const ContactWrapper = styled.p`
	font-family: "Raleway, 600, SemiBold", sans-serif;
	font-size: 16px;
	line-height: 25px;
	color: ${colors.font};
`;
