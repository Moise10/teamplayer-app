import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {bgPattern_1, bgPattern_2, 
	bgPattern_4, bgPattern_5, bgPattern_6, 
	ChartIcon, CogIcon, PersonIcon, Aiysha, Arthur, kady} from './index'
	


function Home() {
  return (
		<>
			<HomeContainer>
				<HeroSection >
					<h1>
						Find the best <span>talent</span>
					</h1>
					<p>
							Finding the right people and building high performing teams can be
							hard. Most companies aren’t tapping into the abundance of global
							talent. We’re about to change that.
					</p>
					<img src={bgPattern_1} alt="" />
				</HeroSection>
			</HomeContainer>

			<Main>
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
					<MainImg1 src={bgPattern_2} alt="" />
				</MainContent>
			</Main>

			<Testimonial>
				<TestimonialContent>
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
				<TestimonialBg1 src={bgPattern_5} alt="" />
				<TestimonialBg2 src={bgPattern_6} alt="" />
			</Testimonial>

			<CallToAction >
				<CallToActionContent>
					<h1>Ready to get started?</h1>
					<$Link to={'/contact'}>contact us</$Link>
					<img src={bgPattern_4} alt="" />
				</CallToActionContent>
			</CallToAction>
		</>
	);
}

const HomeContainer = styled.div`
	width: 100%;
	background-color: #014e56;
	padding: 2rem 1.6rem;
	background-image: url(${({ background }) => background});
	background-repeat: no-repeat;
	background-position: bottom center;
	position: relative;
`;

const HeroSection = styled.div`
	color: #fff;
	text-align: center;
	max-width: 900px;
	margin: 0 auto;

	h1 {
		font-size: 2.3rem;
		line-height: 1;
		font-weight: bold;

		span {
			color: #f67e7e;
		}
	}

	p {
		text-align: center;
		padding-bottom: 8rem;
	}

	img {
		position: absolute;
		bottom: 0;
		left: 0.4rem;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 5.3rem;
			line-height: 1;
			font-weight: bold;
			line-height: 1;
			margin-bottom: 0;

			span {
				color: #f67e7e;
			}
		}

		p {
			text-align: center;
			margin-bottom: 5rem;
			font-size: 1.06rem;
		}

		img {
			bottom: 0;
			left: 30%;
		}
	}

	@media (min-width: 850px) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 20rem;
		margin-bottom: 4rem;
		gap: 2rem;

		h1 {
			font-size: 4.6rem;
			flex: 0.5;
			padding: 0;
			margin: 0;
			text-align: left;
			span {
				color: #f67e7e;
			}
		}

		p {
			text-align: left;
			font-size: 1.3rem;
			flex: 0.5;
			padding: 0;
			margin: 0;
		}

		img {
			bottom: 0;
			left: 59%;
		}
	}
`;

const Main = styled.div`
	width: 100%;
	background-color: #012f34;
	padding: 2rem 1.6rem;
	position: relative;
	overflow: hidden;
`;

const MainContent = styled.div`
	max-width: 900px;
	margin: 0 auto;
	h3 {
		text-align: left;
		color: #fff;
		font-size: 2.5rem;
		line-height: 1;
		padding-right: 8rem;
	}
	@media (min-width: 768px) {
		h3 {
			text-align: left;
			color: #fff;
			font-size: 2rem;
			line-height: 1;
			padding-top: 5rem;
		}
	}

	@media (min-width: 850px) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		height: 30rem;
		h3 {
			text-align: left;
			color: #fff;
			font-size: 2.3rem;
			line-height: 1;
			padding-top: 0;
			padding-right: 0;
			flex: 1;
			margin-top: 0;
		}
		
	}
`;

const FlexContainer = styled.div`
	text-align: center;

	p {
		color: #f67e7e;
		text-align: center;
	}

	span {
		color: #fff;
	}

	img {
		margin-top: 2rem;
	}

	@media (min-width: 768px) {
		div {
			display: flex;
			gap: 2rem;
			margin-bottom: 0.4rem;
			div {
				flex-direction: column;
				display: flex;
				text-align: left;
				gap: 0;
				p {
					text-align: left;
				}
			}
			img {
				margin-top: 0;
				object-fit: contain;
			}
		}
	}

	@media (min-width: 850px) {
		flex: 1;
		div {
			display: flex;
			gap: 1rem;
			margin-bottom: 0.4rem;
			div {
				flex-direction: column;
				display: flex;
				text-align: left;
				gap: 0;
				p {
					font-size: 0.8rem;
				}
				span {
					font-size: 0.9rem;
				}
			}
			img {
				width: 3rem;
				height: 3rem;
			}
		}
	}
`;


  const MainImg1 = styled.img`
	  position: absolute;
		top: 0;
		left: 73%;
		overflow: hidden;

		@media (min-width: 850px) {
			left: 90%;
			right: 0;
			top: 56%
		}
	`;


const Testimonial = styled.div`
	background-color: #004047;
	padding: 2rem 1.6rem;
	position: relative;
	overflow: hidden;
`;


const TestimonialContent = styled.div`
	overflow: hidden;
	max-width: 900px;
	margin: 0 auto;

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
	}
`;

const TestimonialBg1 = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
	max-width: 100%;
`;

const TestimonialBg2 = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	max-width: 100%;
`;



const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	text-align: center;
	justify-content: center;
	align-items: center;
  padding-bottom: 8rem;
	gap: 2rem;

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
	position: relative;
	overflow: hidden;
`;

const CallToActionContent = styled.div`
	max-width: 680px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 4rem;
	overflow: hidden;

	h1 {
		font-size: 2.2rem;
		text-align: center;
		color: #004047;
	}

	img {
		max-width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
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