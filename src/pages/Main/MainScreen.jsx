import React from "react";
import { Main, Section, Title, Paragraph } from "./MainScreenStyled";

const MainScreen = () => {
	return (
		<Main>
			<Section>
				<Title>
					ПОДБЕРЁМ ПЕРСОНАЛ ДЛЯ <br className='separator'></br>ВЫПОЛНЕНИЯ ЛЮБОЙ
					ВАШЕЙ ЗАДАЧИ
				</Title>
				<Paragraph>
					Молодые и ответственные специалисты готовые выполнить вашу работу.{" "}
					<br className='separator'></br>Любое количество человек и в любое
					время.
				</Paragraph>
			</Section>
			<section className='main__background'>
				<div className='main__background back'></div>
				<div className='main__background-image first-image'></div>
				<div className='main__background-image second-image'></div>
				<div className='main__background-image third-image'></div>
				<div className='main__background-image fourth-image'></div>
			</section>
		</Main>
	);
};

export default MainScreen;
