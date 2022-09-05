import React from 'react'
import styled from 'styled-components';
import { ChartIcon, CogIcon, PersonIcon, BgContact } from '../pages/index';

function ContactHero() {
  return (
		<div>
			{/* <ContactHead className="" style={{ textAlign: 'center' }}>
				<h1>Contact</h1>
				<p>Ask us about</p>
			</ContactHead> */}

			<div>
				<div>
					<img src={PersonIcon} alt="Person logo" />
					<h2>The quality of our talent network</h2>
				</div>
				<div>
					<img src={ChartIcon} alt="Person logo" />
					<h2>Usage & implementation of our software</h2>
				</div>
				<div>
					<img src={CogIcon} alt="Person logo" />
					<h2>How we help drive innovation</h2>
				</div>
			</div>
		</div>
	);
}


// const HeroContact = styled.div`
// 	margin: 0 auto;
// 	padding: 2rem 1.6rem;

// 	@media (min-width: 900px) {
		
// 	}
// `;

// const FlexContainer = styled.div`
// 	display: flex;
// 	align-items: center;
// 	gap: 1rem;
// 	color: white;
// 	@media (min-width: 900px) {
// 		flex-direction: column;
// 		justify-content: center;
// 		h2{
// 			font-size: 1rem;
// 		}
// 	}
// `;

// const ContactHead = styled.div`
// 	color: white;
// 	p {
// 		color: #f67e7e;
//     font-weight: bold;
// 	}
// 	@media (min-width: 900px) {
// 		h1,
// 		p {
// 			text-align: left;
// 		}
// 	}


export default ContactHero