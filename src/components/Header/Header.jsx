import React from "react";
import {
	HeaderStyled,
	HeaderWrapper,
	SocialsWrapper,
	SocialLink,
	LinksWrapper,
	LinkStyled,
	ContactWrapper,
} from "./HeaderStyled";
import { Icon, TelegramIcon, ViberIcon } from "../../assets/index.js";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const Header = () => {
	return (
		<HeaderStyled>
			<HeaderWrapper>
				<Icon />
				<LinksWrapper>
					<LinkStyled to='/'>Главная</LinkStyled>
					<DropDownMenu>Услуги</DropDownMenu>
					<LinkStyled to='/price'>Цены</LinkStyled>
					<LinkStyled to='/contacts'>Контакты</LinkStyled>
					<LinkStyled to='/questions'>Вопросы</LinkStyled>
					<DropDownMenu>Договоры</DropDownMenu>
				</LinksWrapper>
				<ContactWrapper>+375 &#40;25&#41; 619 77 00</ContactWrapper>
				<SocialsWrapper>
					<SocialLink href='https://t.me/vilutsdev' target='_blank'>
						<TelegramIcon />
					</SocialLink>
					<SocialLink target='_blank'>
						<ViberIcon />
					</SocialLink>
				</SocialsWrapper>
			</HeaderWrapper>
		</HeaderStyled>
	);
};

export default Header;
