import React from "react";
import {
	DropDownWrapper,
	DropDownTitle,
	DropDownContainer,
	DropDownCard,
	DropDownCardWrapper,
	LinkStyled,
} from "./DropDownMenuStyled";
import { ChevronDown, ChevronTop } from "../../assets";

const DropDownMenu = ({ children }) => {
	let handleClick = (event) => {
		event.preventDefault();

		let activeDown = document.querySelector("#active-down-services");
		let hiddenTop = document.querySelector("#hidden-top-services");
		let hiddenDropBox = document.querySelector("#hidden-drop-box");

		if (activeDown.style.display === "none") {
			activeDown.style.display = "block";
			hiddenTop.style.display = "none";
			hiddenDropBox.style.display = "none";
		} else {
			activeDown.style.display = "none";
			hiddenTop.style.display = "block";
			hiddenDropBox.style.display = "flex";
		}

		console.log("work");
	};

	return (
		<DropDownContainer>
			<DropDownWrapper onClick={handleClick}>
				<DropDownTitle>{children}</DropDownTitle>
				<ChevronDown id='active-down-services' />
				<ChevronTop id='hidden-top-services' />
			</DropDownWrapper>
			<DropDownCard id='hidden-drop-box'>
				<DropDownCardWrapper>
					<LinkStyled to='services/movers'>Услуги грузчиков</LinkStyled>
					<LinkStyled to='services/handymen'>Услуги разнорабочих</LinkStyled>
					<LinkStyled to='services/warehouse'>Складские услуги</LinkStyled>
					<LinkStyled to='services/outstaffing'>
						Аутстаффинг персонала
					</LinkStyled>
					<LinkStyled className='dropDownCard_last-link' to='services/trucking'>
						Грузоперевозки
					</LinkStyled>
				</DropDownCardWrapper>
			</DropDownCard>
		</DropDownContainer>
	);
};

export default DropDownMenu;
