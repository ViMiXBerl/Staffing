import React, { useState } from "react";
import {
	HeaderStyled,
	HeaderWrapper,
	SocialsWrapper,
	SocialLink,
	LinksWrapper,
	LinkStyled,
	ContactWrapper,
} from "./HeaderStyled";
import {
	Icon,
	TelegramIcon,
	ViberIcon,
	ShortIcon,
	OpenMenuIcon,
	CloseMenuIcon,
} from "../../assets/index.js";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import MobileMenu from "../MobileMenu/MobileMenu";

// import DropDownDocs from "../DropDownDocs/DropDownDocs";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	let handleClick = () => setIsOpenMenu(!isOpenMenu);

	return (
		<HeaderStyled>
			<HeaderWrapper>
				{document.documentElement.clientWidth <= 1200 ? (
					<ShortIcon />
				) : (
					<Icon />
				)}

				<LinksWrapper>
					<LinkStyled to='/'>Главная</LinkStyled>
					<DropDownMenu>Услуги</DropDownMenu>
					<LinkStyled to='/price'>Цены</LinkStyled>
					<LinkStyled to='/contacts'>Контакты</LinkStyled>
					<LinkStyled to='/questions'>Вопросы</LinkStyled>
					{/* <DropDownDocs>Договоры</DropDownDocs> */}
				</LinksWrapper>

				<SocialsWrapper>
					<ContactWrapper>+375 &#40;25&#41; 619 77 00</ContactWrapper>
					{document.documentElement.clientWidth <= 800 ? (
						" "
					) : (
						<>
							<SocialLink href='https://t.me/vilutsdev' target='_blank'>
								<TelegramIcon />
							</SocialLink>
							<SocialLink target='_blank'>
								<ViberIcon />
							</SocialLink>
						</>
					)}
				</SocialsWrapper>
				{document.documentElement.clientWidth <= 1200 ? (
					isOpenMenu === false ? (
						<OpenMenuIcon onClick={handleClick} />
					) : (
						<>
							<CloseMenuIcon
								onClick={handleClick}
								className='close-menu-icon'
							/>
							{isOpenMenu === true ? (
								<MobileMenu>
									<>
										<SocialLink href='https://t.me/vilutsdev' target='_blank'>
											<TelegramIcon />
										</SocialLink>
										<SocialLink target='_blank'>
											<ViberIcon />
										</SocialLink>
									</>
								</MobileMenu>
							) : (
								""
							)}
						</>
					)
				) : (
					""
				)}
			</HeaderWrapper>
		</HeaderStyled>
	);
};

export default Header;
