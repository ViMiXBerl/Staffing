import React from "react";
import { HeaderStyled, HeaderWrapper, SocialsWrapper } from "./HeaderStyled";
import { Icon, TelegramIcon, ViberIcon } from "../../assets/index.js";

const Header = () => {
	return (
		<HeaderStyled>
			<HeaderWrapper>
				<Icon />
				<SocialsWrapper>
					<a href='https://t.me/vilutsdev' target='_blank'>
						<TelegramIcon />
					</a>
					<a target='_blank'>
						<ViberIcon />
					</a>
				</SocialsWrapper>
			</HeaderWrapper>
		</HeaderStyled>
	);
};

export default Header;
