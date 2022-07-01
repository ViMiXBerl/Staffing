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
	padding: 1rem 0;

	@media (max-width: 1200px) {
		background-color: ${colors.main};
		padding: 0.5rem 0;
	}
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
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const LinksWrapper = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-around;

	@media (max-width: 1200px) {
		display: none;
	}
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
	margin: 0 1rem 0 0;

	@media (max-width: 1200px) {
		font-size: 14px;
	}
`;
