import React, { useState } from "react";
import { MobileMenuContainer } from "./MobileMenuStyled";
import { DropDownCardWrapper } from "../DropDownMenu/DropDownMenuStyled";
import {
	LinkStyled,
	SocialsWrapper,
	MobileDropDown,
	LinkWrapper,
} from "./MobileMenuStyled";
import { ArrowUpRight, PlusCircle, MinusCircle } from "../../assets/index";
import { colors } from "../../styles/colors";

const MobileMenu = ({ children }) => {
	let [isOpen, setIsOpen] = useState(false);

	let handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<MobileMenuContainer>
			{document.documentElement.clientWidth >= 800 ? (
				""
			) : (
				<SocialsWrapper>{children}</SocialsWrapper>
			)}

			<DropDownCardWrapper>
				<MobileDropDown>
					<LinkStyled to='/'>ГЛАВНАЯ</LinkStyled>
					<ArrowUpRight />
				</MobileDropDown>
				{isOpen === false ? (
					<MobileDropDown>
						{isOpen === false ? (
							<>
								<LinkStyled to='/#'>УСЛУГИ</LinkStyled>

								<PlusCircle onClick={handleClick} />
							</>
						) : (
							<>
								<LinkStyled to='/#' style={{ color: `${colors.button}` }}>
									УСЛУГИ
								</LinkStyled>
								<MinusCircle onClick={handleClick} />
							</>
						)}
					</MobileDropDown>
				) : (
					<MobileDropDown style={{ borderBottom: "none" }}>
						{isOpen === false ? (
							<>
								<LinkStyled to='/#'>УСЛУГИ</LinkStyled>

								<PlusCircle onClick={handleClick} />
							</>
						) : (
							<>
								<LinkStyled to='/#' style={{ color: `${colors.button}` }}>
									УСЛУГИ
								</LinkStyled>
								<MinusCircle onClick={handleClick} />
							</>
						)}
					</MobileDropDown>
				)}
				{isOpen === false ? (
					""
				) : (
					<LinkWrapper>
						<LinkStyled style={{ fontSize: "14px" }} to='services/movers'>
							УСЛУГИ ГРУЗЧИКОВ
						</LinkStyled>
						<LinkStyled style={{ fontSize: "14px" }} to='services/handymen'>
							УСЛУГИ РАЗНОРАБОЧИХ
						</LinkStyled>
						<LinkStyled style={{ fontSize: "14px" }} to='services/warehouse'>
							СКЛАДСКИЕ УСЛУГИ
						</LinkStyled>
						<LinkStyled style={{ fontSize: "14px" }} to='services/outstaffing'>
							АУТСТАФФИНГ ПЕРСОНАЛА
						</LinkStyled>
						<LinkStyled style={{ fontSize: "14px" }} to='services/trucking'>
							ГРУЗОПЕРЕВОЗКИ
						</LinkStyled>
					</LinkWrapper>
				)}

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
