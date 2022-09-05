import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import {bgPattern_7} from '../pages/index'


function Header() {
	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
			style={{
				width: '80vw',
				padding: '1rem',
				minHeight: '100vh',
				backgroundColor: '#2C6269',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<FlexBox>
				<Button onClick={toggleDrawer(anchor, true)}>
					<CloseIcon style={{ color: '#fff' }} />
				</Button>
			</FlexBox>

			<ListStyles>
				<ListItemStyle>
					<Link style={{ fontWeight: 'bold', fontSize: '1.7rem' }} to="/">
						home
					</Link>
				</ListItemStyle>
				<ListItemStyle>
					<Link style={{ fontWeight: 'bold', fontSize: '1.7rem' }} to="/about">
						about
					</Link>
				</ListItemStyle>
				<li style={{ marginTop: '30px' }}>
					<Link
						style={{
							textDecoration: 'none',
							color: '#fff',
							fontSize: '1.7rem',
							padding: '10px 30px',
							border: '2px solid #fff',
							borderRadius: '50px',
							fontWeight: 'bold',
						}}
						to="/contact"
					>
						contact us
					</Link>
				</li>
			</ListStyles>
			<img src={bgPattern_7} alt="" style={{position: 'absolute',
			bottom: '0',
			right: '-6rem',
			}}/>
		</Box>
	);

	return (
		<div style={{ backgroundColor: '#014e56' }}>
			<HeaderStyles>
				{['right'].map((anchor) => (
					<React.Fragment key={anchor}>
						<Flex>
							<img src={logo} alt="" style={{ objectFit: 'contain' }} />
							<Button onClick={toggleDrawer(anchor, true)}>
								<MenuIcon style={{ color: 'white' }} />
							</Button>
						</Flex>

						<Drawer
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							{list(anchor)}
						</Drawer>
					</React.Fragment>
				))}
			</HeaderStyles>

			<HeaderBig style={{ maxWidth: '900px', margin: '0 auto' }}>
					<div>
						<img src={logo} alt="" className="logo" />
						<ul>
							<li>
								<LinkStyle to="/">home</LinkStyle>
							</li>
							<li>
								<LinkStyle to="/about">about</LinkStyle>
							</li>
						</ul>
					</div>

				<nav>
					<ContactLink
						className="contact-us"
						to="/contact"
					>
						contact us
					</ContactLink>
				</nav>
			</HeaderBig>
		</div>
	);
}

const Flex = styled.div`
	display: flex;
	justify-content: space-between;

	.css-i4bv87-MuiSvgIcon-root {
		color: #fff;
		font-size: 2rem;
	}

`;

const FlexBox = styled.div`
	min-height: 4rem;
	padding: 2rem 1rem;
	display: flex;
	justify-content: flex-end;
`;

const HeaderStyles = styled.div`
	min-height: 4rem;
	text-align: center;
	padding: 2rem 1rem;
	background-color: #014e56;
  max-width: 900px;
  margin: 0 auto;

	.css-i4bv87-MuiSvgIcon-root {
		color: #2a2a2a;
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const ListStyles = styled.ul`
	display: flex;
	color: yellow;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 2rem;
	list-style: none;
`;

const ListItemStyle = styled.li`
	width: 50vw;
	padding: 1rem 0;
	margin-bottom: 1.5rem;
	
	&:hover {
		border: 1px solid white;
	}

	a {
		text-decoration: none;
		font-size: 1.3rem;
		color: white;
		letter-spacing: 4px;
		font-weight: 300;
	}
`;



const HeaderBig = styled.div`
	background-color: #014e56;

	@media screen and (max-width: 768px) {
		display: none;
	}

	@media (min-width: 768px) {
		min-height: 4rem;
		padding: 2rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo {
			object-fit: contain;
		}
		div {
			display: flex;
			align-items: center;

			ul {
				list-style: none;
				display: flex;
				align-items: center;
				gap: 1rem;
			}

			img {
				width: 4rem;
				object-fit: contain;
			}
		}
	}
`;

const LinkStyle = styled(Link)`
	text-decoration: none;
	color: white;
	font-size: 0.8rem;
	&:hover {
		color: #f67e7e;
	}
`;

const ContactLink = styled(LinkStyle)`
	&:hover {
		color: #002529;
		background-color: white;
		padding: 8px 15px;
		border-radius: 50px;
		font-size: .7rem;
	}
`;

export default Header;
