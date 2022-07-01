import React from "react";
import {
	DropDownWrapper,
	DropDownTitle,
	DropDownContainer,
	DropDownCard,
} from "../DropDownMenu/DropDownMenuStyled.js";
import { DropDownDocsCardWrapper } from "./DropDownDocsStyled.js";
import { ChevronDown, ChevronTop } from "../../assets";

const DropDownDocs = ({ children }) => {
	return (
		<DropDownContainer>
			<DropDownWrapper>
				<DropDownTitle>{children}</DropDownTitle>
				<ChevronDown />
				<ChevronTop />
			</DropDownWrapper>
			<DropDownCard>
				<DropDownDocsCardWrapper>
					<a href='/#' target='_blank' rel='Ссылка на документ в формате PDF'>
						Услуги грузчиков
					</a>
					<a href='/#' target='_blank' rel='Ссылка на документ в формате PDF'>
						Услуги разнорабочих
					</a>
					<a href='/#' target='_blank' rel='Ссылка на документ в формате PDF'>
						Складские услуги
					</a>
					<a href='/#' target='_blank' rel='Ссылка на документ в формате PDF'>
						Аутстаффинг персонала
					</a>
				</DropDownDocsCardWrapper>
			</DropDownCard>
		</DropDownContainer>
	);
};

export default DropDownDocs;
