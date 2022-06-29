import styled from "styled-components";
import { colors } from "../../styles/colors";
import img from "../../assets/images/Frame45.png";

export const Main = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1000px) {
		justify-content: unset;
		align-items: unset;
	}

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

export const Section = styled.section`
	position: absolute;
	width: 70%;
	z-index: 2;

	@media (max-width: 1000px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 5rem auto;
	}

	@media (max-width: 600px) {
		font-size: 14px;
		line-height: 22px;
	}

	@media (max-width: 500px) {
		position: unset;
		font-size: 14px;
		line-height: 22px;
		padding: 3rem auto;
		background-image: url(${img});
		background-size: cover;
		background-repeat: no-repeat;
		margin: 0;
		padding: 2rem 0;
	}
`;

export const Title = styled.h1`
	font-family: "Raleway 700, Bold", sans-serif;
	font-size: 46px;
	line-height: 74px;
	text-align: center;
	color: ${colors.font};
	margin: 0 0 1rem;

	@media (max-width: 1000px) {
		font-size: 28px;
		line-height: 54px;
	}

	@media (max-width: 600px) {
		font-size: 22px;
		line-height: 44px;
	}

	@media (max-width: 500px) {
		text-align: left;
		padding: 0 1rem 0;
	}
`;

export const Paragraph = styled.p`
	font-family: "Raleway, 500, Medium", sans-serif;
	font-size: 22px;
	line-height: 34px;
	text-align: center;
	color: ${colors.font};

	@media (max-width: 1000px) {
		font-size: 18px;
		line-height: 28px;
	}

	@media (max-width: 600px) {
		font-size: 14px;
		line-height: 22px;
	}

	@media (max-width: 500px) {
		text-align: left;
		padding: 0 1rem 0;
	}
`;
