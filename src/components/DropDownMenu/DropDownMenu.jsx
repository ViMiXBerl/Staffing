import React, { useState } from "react";
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
	const [isOpen, setIsOpen] = useState(false);

	let handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<DropDownContainer>
			<DropDownWrapper onClick={handleClick}>
				<DropDownTitle>{children}</DropDownTitle>
				{isOpen === false ? <ChevronDown /> : <ChevronTop />}
			</DropDownWrapper>
			{isOpen && (
				<DropDownCard>
					<DropDownCardWrapper>
						<LinkStyled to='services/movers'>Услуги грузчиков</LinkStyled>
						<LinkStyled to='services/handymen'>Услуги разнорабочих</LinkStyled>
						<LinkStyled to='services/warehouse'>Складские услуги</LinkStyled>
						<LinkStyled to='services/outstaffing'>
							Аутстаффинг персонала
						</LinkStyled>
						<LinkStyled
							className='dropDownCard_last-link'
							to='services/trucking'
						>
							Грузоперевозки
						</LinkStyled>
					</DropDownCardWrapper>
				</DropDownCard>
			)}
		</DropDownContainer>
	);
};

export default DropDownMenu;
