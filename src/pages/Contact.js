import React from 'react'
import Form from '../components/Form'
import styled from 'styled-components'
import {
	ChartIcon,
	CogIcon,
	PersonIcon,
	BgContact,
} from './index';

function Contact() {
  return (
		<>
			<ContactContainer background={BgContact}>
				<ContactMain>
					<div className="">
						<h1>Contact</h1>
						<h2>Ask us about</h2>
						<div>
							<div>
								<img src={PersonIcon} alt="Person logo" />
								<h3>The quality of our talent network</h3>
							</div>
							<div>
								<img src={CogIcon} alt="Person logo" />
								<h3>Usage & implementation of our software</h3>
							</div>
							<div>
								<img src={ChartIcon} alt="Person logo" />
								<h3>How we help drive innovation</h3>
							</div>
						</div>
					</div>
				</ContactMain>
			</ContactContainer>
			<Form />
		</>
	);
}

const ContactContainer = styled.div`
	width: 100%;
	background-color: #2c6269;
	padding: 2rem 1.6rem;
	background-image: url(${({ background }) => background});
	background-repeat: no-repeat;
	background-position: bottom right;
`;

const ContactMain = styled.div`
  
`

const AskAbout = styled.div`
  display
`

export default Contact