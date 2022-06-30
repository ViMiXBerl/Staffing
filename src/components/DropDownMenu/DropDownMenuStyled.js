import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Link } from "react-router-dom";

export const DropDownWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const DropDownTitle = styled.p`
	margin: 0 0.4rem 0 0;
	font-family: "Raleway, 600, SemiBold", sans-serif;
	font-size: 16px;
	line-height: 22px;
	color: ${colors.font};
`;

export const DropDownContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DropDownCard = styled.div`
	width: 189px;
	border-radius: 6px;
	background-color: ${colors.darkCard};
	position: absolute;
	top: 100%;
	right: 62%;
`;

export const DropDownCardWrapper = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
`;

export const LinkStyled = styled(Link)`
	font-family: "Raleway, 500, Medium", sans-serif;
	font-size: 14px;
	line-height: 20px;
	color: ${colors.font};
	text-decoration: none;
	padding: 0.6rem;
	border-bottom: 1px solid ${colors.border};
`;
