import React, { useState } from 'react';
import AboutCard from '../components/AboutCard'
import styled from 'styled-components'
import {
	bgPattern_1,
	bgPattern_2,
	bgPattern_3,
	bgPattern_4,
	bgPattern_5,
	bgPattern_6,
	JakartaPost,
	TechRadar,
	Guardian,
	Verge,
	Gatgets,
	Nikita,
	Griffin,
	Drake,
	Cruz,
	Christian,
	Aden,
	bgPattern_7,
} from './index';
	

import {NavLink} from 'react-router-dom'




function About() {

	const Data = [
		{
			imgUrl: `${Nikita}`,
			name: 'Nikita Marks',
			position: 'Founder & CEO',
			text: '“It always amazes me how much talent there is in every corner of the globe.”',
		},
		{
			imgUrl: `${Christian}`,
			name: 'Cristian Duncan',
			position: 'Co-founder & COO',
			text: '“Distributed teams required unique processes. You need to approach work in a new way.”',
		},
		{
			imgUrl: `${Cruz}`,
			name: 'Cruz Hamer',
			position: 'Co-founder & CTO',
			text: "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
		},
		{
			imgUrl: `${Drake}`,
			name: 'Drake Heaton',
			position: 'Business Development Lead',
			text: '“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”',
		},
		{
			imgUrl: `${Griffin}`,
			name: 'Griffin Wise',
			position: 'Lead Marketing',
			text: '“Unique perspectives shape unique products, which is what you need to survive these days.”',
		},
		{
			imgUrl: `${Aden}`,
			name: 'Aden Allan',
			position: 'Head of Talent',
			text: '“Empowered teams create truly amazing products. Set the north star and let them follow it.”',
		},
	];



  return (
		<>
			<AboutContainer background={bgPattern_7}>
				<HeroSection>
					<h1>About</h1>
					<div className="">
						<p>
							We help companies build dynamic teams made up of top global
							talent. Using our network of passionate professionals we drive
							innovation and deliver incredible outcomes. Talented, diverse
							teams shape the best products and experiences. We’ll bring those
							teams to you.
						</p>
					</div>
				</HeroSection>
			</AboutContainer>

			<GridContainer background={bgPattern_6}>
				<Grid>
					{Data.map((item) => (
						<AboutCard
							key={item.name}
							imgUrl={item.imgUrl}
							position={item.position}
							text={item.text}
							name={item.name}
						/>
					))}
				</Grid>
			</GridContainer>

			<ClientContainer background={bgPattern_2}>
				<Client>
          <h1>Some of our clients</h1>
          <Flex className="">
            <img src={Verge} alt="" />
            <img src={JakartaPost} alt="" />
            <img src={Guardian} alt="" />
            <img src={TechRadar} alt="" />
            <img src={Gatgets} alt="" />
          </Flex>
        </Client>
			</ClientContainer>

      <CallToAction background={bgPattern_4}>
				<CallToActionContent>
					<h1>Ready to get started?</h1>
					<$Link to={'/contact'}>contact us</$Link>
				</CallToActionContent>
			</CallToAction>
		</>
	);
}




const AboutContainer = styled.div`
	width: 100%;
	background-color: #2c6269;
	padding: 2rem 1.6rem;
	background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: bottom -30% right -54%;
`;

const HeroSection = styled.div`
	color: #fff;
	text-align: center;

	h1 {
		font-size: 4rem;
		line-height: 1;
		span {
			color: #f67e7e;
		}
	}

	p {
		text-align: center;
		padding-bottom: 8rem;
	}

	@media (min-width: 768px) {
		max-width: 70%;
		margin: 0 auto;
	}
`;

const GridContainer = styled.div`
	
	background-color: #004047;
	padding: 8rem 1.6rem;
	background-image: url(${({ background }) => background});
	background-repeat: no-repeat;
	background-position: bottom right;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	gap: 2rem;
	@media (min-width: 768px) {
		max-width: 70%;
		margin: 0 auto;
	}
`;

const ClientContainer = styled.div`
	width: 100%;
	background-color: #012f34;
	padding: 2rem 1.6rem;
  background-image: url(${({background}) => background});
  background-repeat: no-repeat;
  background-position: top -40% left -55%;
`;

const Client = styled.div`
  text-align: center;
  color: #fff;
  padding-bottom: 4rem;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 12rem;
    height: 2rem;
  }
`


const CallToActionContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 4rem;

	h1 {
		font-size: 2.2rem;
		text-align: center;
		color: #004047;
	}

	@media (min-width: 768px) {
		max-width: 70%;
		margin: 0 auto;
	}
`;

const $Link = styled(NavLink)`
	color: #004047;
	text-decoration: none;
	font-size: 1rem;
	padding: 5px 15px;
	border: 2px solid #004047;
	border-radius: 4rem;
`;


const CallToAction = styled.div`
	width: 100%;
	background-color: #f67e7e;
	padding: 2rem 1.6rem;
	background-image: url(${({ background }) => background});
	background-repeat: no-repeat;
	background-position: bottom left;
`;

export default About