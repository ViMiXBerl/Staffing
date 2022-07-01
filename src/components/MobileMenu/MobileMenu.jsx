import React from "react";
import { MobileMenuContainer } from "./MobileMenuStyled";
import { DropDownCardWrapper } from "../DropDownMenu/DropDownMenuStyled";
import { LinkStyled, SocialsWrapper, MobileDropDown } from "./MobileMenuStyled";
import { ArrowUpRight, PlusCircle } from "../../assets/index";

const MobileMenu = ({ children }) => {
	return (
		<MobileMenuContainer>
			<SocialsWrapper>{children}</SocialsWrapper>
			<DropDownCardWrapper>
				<MobileDropDown>
					<LinkStyled to='/'>ГЛАВНАЯ</LinkStyled>
					<ArrowUpRight />
				</MobileDropDown>
				<MobileDropDown>
					<LinkStyled to='/#'>УСЛУГИ</LinkStyled>
					<PlusCircle />
				</MobileDropDown>
				<MobileDropDown>
					<LinkStyled to='/price'>ЦЕНЫ</LinkStyled>
					<ArrowUpRight />
				</MobileDropDown>
				<MobileDropDown>
					<LinkStyled to='/contacts'>КОНТАКТЫ</LinkStyled>
					<ArrowUpRight />
				</MobileDropDown>
				<MobileDropDown>
					<LinkStyled to='/questions'>ВОПРОСЫ</LinkStyled>
					<ArrowUpRight />
				</MobileDropDown>
			</DropDownCardWrapper>
		</MobileMenuContainer>
	);
};

export default MobileMenu;
