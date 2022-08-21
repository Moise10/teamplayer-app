import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import {NavLink} from 'react-router-dom'


function Header() {
  return (
		<HeaderContainer>
			<HeaderStyle>
				<Nav className="">
					<img src={Logo} alt="" />
          <ul>
            <$Link to={'/'}>home</$Link>
            <$Link to={'/about'}>about</$Link>
          </ul>
				</Nav>
        <ContactButton to={'/contact'}>contact us</ContactButton>
			</HeaderStyle>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	background-color: #2c6269;
	padding: 2rem 0;
`;

const HeaderStyle = styled.header`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

`

const $Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 5px 15px;
`

const ContactButton = styled($Link)`
  border: 2px solid #fff;
  border-radius: 4rem;
`;

export default Header