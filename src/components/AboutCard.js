import React, {useState} from 'react'
import styled from 'styled-components';
import CloseIcon from '../assets/icon-close.svg'
import CrossIcon from '../assets/icon-cross.svg'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TwitterLogo from '../assets/icon-twitter.svg';
import LinkedInLogo from '../assets/icon-linkedin.svg';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CloseOutlined from '@mui/icons-material/CloseOutlined';


function AboutCard (
  {imgUrl, name, position, text}) {

  const [open, setOpen] = useState(false)
  
  const displayIcon = () => {
    if (open){
      return <AddOutlinedIcon />
    }else {
      <CloseOutlined />
    }
  }


  return (
		<>
			{open ? (
				<CardStyle >
					<div >
						<h4 >{name}</h4>
						<p >{text}</p>
						<LogoContainer className="">
							<Logo src={LinkedInLogo}  alt="" />
							<Logo src={TwitterLogo} alt="" />
						</LogoContainer>
						<button onClick={() => setOpen((prev) => !prev)}><CloseOutlinedIcon /></button>
					</div>
				</CardStyle>
			) : (
				<CardStyle >
					<Img src={imgUrl}  alt="" />
					<div >
						<h4 >{name}</h4>
						<p >{position}</p>
					</div>
					<button onClick={() => setOpen((prev) => !prev)}>
            <AddOutlinedIcon />
					</button>
				</CardStyle>
			)}
		</>
	);}


const CardStyle = styled.div`
	background-color: #012f34;
	color: #fff;
	text-align: center;
	padding: 20px;
	position: relative;

	h4 {
		color: #79c8c7;
	}

	button {
		background-color: #f67e7e;
		border: none;
		position: absolute;
		left: 45%;
		bottom: -12px;
		.css-i4bv87-MuiSvgIcon-root {
		}
	}
`;

const Img = styled.img`
	height: 5rem;
	width: 5rem;
	border-radius: 100%;
	border: 2px solid #79c8c7;
`;

const Logo = styled.img`
	height: 2rem;
	width: 2rem;
`;

const LogoContainer = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;


export default AboutCard