import React from 'react'
import styled from 'styled-components'
import kady from '../assets/avatar-kady.jpg'
import Aiysha from '../assets/avatar-aiysha.jpg'
import Arthur from '../assets/avatar-arthur.jpg'
import {NavLink} from 'react-router-dom'
import bgPattern_3 from '../assets/bg-pattern-home-1.svg'
import bgPattern_1 from '../assets/bg-pattern-home-2.svg'
import bgPattern_2 from '../assets/bg-pattern-home-3.svg'
import bgPattern_5 from '../assets/bg-pattern-home-5.svg'
import bgPattern_6 from '../assets/bg-pattern-home-4-about-3.svg'
import bgPattern_4 from '../assets/bg-pattern-home-6-about-5.svg'
import ChartIcon from '../assets/icon-chart.svg'
import CogIcon from '../assets/icon-cog.svg'
import PersonIcon from '../assets/icon-person.svg'
import CrossIcon from '../assets/icon-cross.svg'



function Home() {
  return (
		<>
			<HomeContainer background={bgPattern_1}>
				<HeroSection>
					<h1>
						Find the best <span>talent</span>
					</h1>
					<div className="">
						<p>
							Finding the right people and building high performing teams can be
							hard. Most companies aren’t tapping into the abundance of global
							talent. We’re about to change that.
						</p>
					</div>
				</HeroSection>

			</HomeContainer>

			<Main background={bgPattern_2}>
				<MainContent>
					<h3>Build & manage distributed teams like no one else.</h3>
					<FlexContainer>
						<div className="">
							<img src={ChartIcon} alt="" />
							<div className="">
								<p>Experienced Individuals</p>
								<span>
									Our network is made up of highly experienced professionals who
									are passionate about what they do.
								</span>
							</div>
						</div>
						<div className="">
							<img src={CogIcon} alt="" />
							<div className="">
								<p>Easy to Implement</p>
								<span>
									Our processes have been refined over years of implementation
									meaning our teams always deliver.
								</span>
							</div>
						</div>
						<div className="">
							<img src={PersonIcon} alt="" />
							<div className="">
								<p>Enhanced Productivity</p>
								<span>
									Our customized platform with in-built analytics helps you
									manage your distributed teams.
								</span>
							</div>
						</div>
					</FlexContainer>
				</MainContent>
			</Main>

			<Testimonial background={bgPattern_6}>
				<TestimonialContent background={bgPattern_5}>
					<h1>
						Delivering real results for top companies. Some of our{' '}
						<span>success stories.</span>
					</h1>
					<Grid className="">
						<div className="">
							<p>
								“The team perfectly fit the specialized skill set required. They
								focused on the most essential features helping us launch the
								platform eight months faster than planned.”
							</p>
							<h4>Kady Baker</h4>
							<p>Product Manager at Bookmark</p>
							<img src={kady} alt="" />
						</div>
						<div className="">
							<p>
								“We needed to automate our entire onboarding process. The team
								came in and built out the whole journey. Since going live, user
								retention has gone through the roof!”
							</p>
							<h4>Aiysha Reese</h4>
							<p>Founder of Manage</p>
							<img src={Aiysha} alt="" />
						</div>
						<div className="">
							<p>
								“Amazing. Our team helped us build an app that delivered a new
								experience for hiring a physio. The launch was an instant
								success with 100k downloads in the first month.”
							</p>
							<h4>Arthur Clarke</h4>
							<p>Co-founder of MyPhysio</p>
							<img src={Arthur} alt="" />
						</div>
					</Grid>
				</TestimonialContent>
			</Testimonial>

			<CallToAction background={bgPattern_4}>
				<CallToActionContent>
					<h1>Ready to get started?</h1>
					<$Link to={'/contact'}>contact us</$Link>
				</CallToActionContent>
			</CallToAction>
		</>
	);
}

const HomeContainer = styled.div`
	width: 100%;
	background-color: #2c6269;
	padding: 2rem 1.6rem;
	background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: bottom center;

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

  p{
    text-align: center;
    padding-bottom: 8rem;
  }

	@media (min-width: 768px) {
		max-width: 70%;
		margin: 0 auto;
	}
`;

const Main = styled.div`
	width: 100%;
	background-color: #012f34;
	padding: 2rem 1.6rem;
	background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: top right -48%;
`;

const MainContent = styled.div`
	h3 {
		text-align: left;
		color: #fff;
    font-size: 2.5rem;
    line-height: 1;
    padding-right: 8rem;
	}
	@media (min-width: 768px) {
		max-width: 70%;
		margin: 0 auto;
	}
`;

const FlexContainer = styled.div`
	text-align: center;

	p {
		color: #f67e7e;
	}

	span {
		color: #fff;
	}

	img {
		margin-top: 2rem;
	}
`;

const Testimonial = styled.div`
	width: 100%;
	background-color: #2c6269;
	padding: 2rem 1.6rem;
	background-image: url(${({ background }) => background});
	background-repeat: no-repeat;
	background-position: top left;
`;

const TestimonialContent = styled.div`
	h1 {
		text-align: center;
		color: #fff;
		font-size: 2.1rem;
		padding-top: 5rem;

		span {
			color: #79c8c7;
		}
	}
	@media (min-width: 768px) {
		max-width: 70%;
		margin: 0 auto;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	text-align: center;
	justify-content: center;
	align-items: center;
  padding-bottom: 8rem;

	p {
		color: #fff;
	}

	h4 {
		color: #79c8c7;
	}

	span {
		color: whitesmoke;
	}

	img {
		width: 4rem;
		height: 4rem;
		border-radius: 100%;
		border: 2px solid #c4fffe;
	}
`;


const CallToAction = styled.div`
	width: 100%;
	background-color: #f67e7e;
	padding: 2rem 1.6rem;
	background-image: url(${({ background }) => background});
	background-repeat: no-repeat;
	background-position: bottom left;
`;

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


export default Home