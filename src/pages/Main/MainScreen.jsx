import React from "react";
import {
	Main,
	Section,
	Title,
	Paragraph,
	ButtonWrapper,
	SectionPopularServices,
	PopularServicesWrapper,
	PopularServicesTitle,
	ServiceCardWrapper,
} from "./MainScreenStyled";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ButtonTransparent from "../../components/ButtonTransparent/ButtonTransparent";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ServiceCardTitleStiled from "../../components/ServiceCardTitle/ServiceCardTitle";

const MainScreen = () => {
	return (
		<>
			<Header />
			<Main>
				<Section>
					<Title>
						ПОДБЕРЁМ ПЕРСОНАЛ ДЛЯ <br className='separator'></br>ВЫПОЛНЕНИЯ
						ЛЮБОЙ ВАШЕЙ ЗАДАЧИ
					</Title>
					<Paragraph>
						Молодые и ответственные специалисты готовые выполнить вашу работу.{" "}
						<br className='separator'></br>Любое количество человек и в любое
						время.
					</Paragraph>
					<ButtonWrapper>
						<Button>Заказать персонал</Button>
						<ButtonTransparent>Узнать цены</ButtonTransparent>
					</ButtonWrapper>
				</Section>
				<section className='main__background'>
					<div className='main__background back'></div>
					<div className='main__background-image first-image'></div>
					<div className='main__background-image second-image'></div>
					<div className='main__background-image third-image'></div>
					<div className='main__background-image fourth-image'></div>
				</section>
				<SectionPopularServices>
					<PopularServicesWrapper>
						<PopularServicesTitle>
							ПОПУЛЯРНЫЕ УСЛУГИ НАШЕЙ КОМПАНИИ
						</PopularServicesTitle>
						<ServiceCardWrapper>
							<ServiceCard>
								<ServiceCardTitleStiled>
									УСЛУГИ ГРУЗЧИКОВ
								</ServiceCardTitleStiled>
							</ServiceCard>
						</ServiceCardWrapper>
					</PopularServicesWrapper>
				</SectionPopularServices>
			</Main>
		</>
	);
};

export default MainScreen;
