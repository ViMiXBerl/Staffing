import React from "react";
import {
	HeaderStyled,
	HeaderWrapper,
	SocialsWrapper,
	SocialLink,
} from "./HeaderStyled";
import { Icon, TelegramIcon, ViberIcon } from "../../assets/index.js";

const Header = () => {
	return (
		<HeaderStyled>
			<HeaderWrapper>
				<Icon />
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
