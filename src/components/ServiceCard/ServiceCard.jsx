import React from "react";
import { ServiceCardStyled } from "./ServiceCardStyled";

const ServiceCard = ({ children }) => {
	return <ServiceCardStyled>{children}</ServiceCardStyled>;
};

export default ServiceCard;
