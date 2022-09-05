import React from 'react'
import logo from '../assets/logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from 'styled-components'
import {Link } from 'react-router-dom'


function Footer() {
  return (
		<FooterContainer>
			<FooterStyle className="">
				<FlexTopStyle className="">
					<LogoStyles className="">
						<img src={logo} alt="logo__img" />
						<div className="">
							<LinkStyle to="/">home</LinkStyle>
							<LinkStyle to="/about">about</LinkStyle>
						</div>
					</LogoStyles>
					<div className="">
						<p>987 Hillcrest Lane</p>
						<p>Irvine, CA </p>
						<p>California, 92714</p>
						<p>Call Us: 949-833-7432</p>
					</div>
				</FlexTopStyle>

				<FlexBottomStyles className="">
					<div className="">
						<TwitterIcon />
						<FacebookIcon />
						<InstagramIcon />
					</div>
					<p>Copyright &copy;2022.All Right Reserved</p>
				</FlexBottomStyles>
			</FooterStyle>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	background-color: #012f34;
  width: 100%;

`;

const FooterStyle = styled.div`
	max-width: 900px;
	margin: 0 auto;
	text-align: center;
	color: white;
	min-height: 6rem;
	padding: 1rem 2rem 0 2rem;

	@media (min-width: 868px) {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 1rem 0;
	}
`;

const LogoStyles = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	div {
		display: flex;
		gap: 2rem;
	}
	img {
		width: 6rem;
		object-fit: contain;
		margin-bottom: 2rem;
	}
	@media (min-width: 768px) {
		img {
			margin-bottom: 2rem;
		}
	}
`;

const LinkStyle = styled(Link)`
	text-decoration: none;
	color: white;
	@media (min-width: 768px) {
	}
`;

const FlexTopStyle = styled.div`
	div {
		p {
			color: #979797;
		}
	}
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;

		div {
			p {
				text-align: right;
				color: #979797;
			}
		}

		p {
			margin: 0;
		}
	}

	@media (min-width: 868px) {
		gap: 4rem;
	}
`;


const FlexBottomStyles = styled.div`
	display: flex;
	flex-direction: column;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	p {
		color: #979797;
	}
	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	@media (min-width: 868px) {
		flex-direction: column;

		div {
			align-self: flex-end;
			margin-bottom: auto;
		}

		p {
			margin-bottom: auto;
		}
	}
`;

export default Footer