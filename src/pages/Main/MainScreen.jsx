import React from "react";
import { Main } from "./MainScreenStyled";

const MainScreen = () => {
	return (
		<Main>
			<div className='main__background'></div>
			<div className='main__background-image first-image'></div>
			<div className='main__background-image second-image'></div>
			<div className='main__background-image third-image'></div>
			<div className='main__background-image fourth-image'></div>
		</Main>
	);
};

export default MainScreen;
