import React from 'react'
import Form from '../components/Form'
import ContactHero from '../components/ContactHero';
import styled from 'styled-components'
import { ChartIcon, CogIcon, PersonIcon, BgContact } from './index';


function Contact() {
  return (
		<ContactStyles>
			<ImgTop src={BgContact} alt="" />

			<div className="">
				<Form />
			</div>
			<ImgBottom src={BgContact} alt="" />
		</ContactStyles>
	);
}


const ContactStyles = styled.div`
	width: 100%;
	background-color: #014e56;
	padding-top: 1rem;
	position: relative;
	overflow: hidden;

	@media (min-width: 900px) {
		div {
			margin: 0 auto;
			max-width: 900px;
			div {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

			}
		}
	}


`;


	const ImgBottom = styled.img`
		position: absolute;
		bottom: 0;
		right: -90px;
		margin-top: 6rem;
	`;

	const ImgTop = styled.img`
	position: absolute;
	top: 0;
	left: -6rem;

	@media (max-width: 773px){
		display: none;
	}

`;





export default Contact