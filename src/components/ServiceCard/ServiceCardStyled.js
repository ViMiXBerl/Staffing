import styled from "styled-components";
// import { colors } from "../../styles/colors";
import img from "../../assets/images/Rectangle33.png";

export const ServiceCardStyled = styled.div`
	width: 50%;
	height: 57vh;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 10px;
	background-image: url(${img});
	display: flex;
	align-items: flex-end;

	@media (max-width: 1400px) {
		height: 47vh;
	}

	@media (max-width: 1000px) {
		height: 34vh;
	}

	@media (max-width: 800px) {
		height: 27vh;
	}

	@media (max-width: 500px) {
		height: 33vh;
		width: 100%;
	}
`;
