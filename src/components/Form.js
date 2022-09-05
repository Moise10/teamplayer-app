import React, { useState} from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function Form() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		title: '',
		comments: '',
		companyName: '',
	});

  const handleSubmit = (e) => {
    e.preventDefault();
		


    setFormData({
			name: '',
			email: '',
			title: '',
			comments: '',
			companyName: '',
		});
    console.log(formData)
  }

  const handleChange = (e) => {

    setFormData(prevFormData => {
      return {
				...prevFormData,
				[e.target.name]: e.target.value,
			};
    })
  }

  return (
		<FormContainer className="">
			<FormStyle onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					onChange={handleChange}
					name="name"
					value={formData.name}
				/>
				<input
					type="email"
					placeholder="Email Address"
					onChange={handleChange}
					name="email"
					value={formData.email}
				/>
				<input
					type="text"
					placeholder="Company Name"
					onChange={handleChange}
					name="companyName"
					value={formData.companyName}
				/>
				<input
					type="text"
					placeholder="Title"
					onChange={handleChange}
					name="title"
					value={formData.title}
				/>
				<textarea
					placeholder="Message"
					onChange={handleChange}
					name="comments"
					value={formData.comments}
				/>
				<div className="">
					<button type="submit">submit</button>
				</div>
			</FormStyle>
		</FormContainer>
	);
}


const FormContainer = styled.div`
	width: 100%;
	background-color: #014e56;
`;


const FormStyle = styled.form`
	padding: 4rem 0;
	max-width: 500px;
	margin: 0 auto;


	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button {
		padding: 0.8rem 2.3rem;
		border: none;
		border-radius: 20px;
		color: #000;
		max-width: 10rem;
		margin: 0 auto;
	}

	input {
		width: 100%;
		padding: 10px 0;
		border: none;
		margin-bottom: 1.3rem;
		background-color: #014e56;
		border-bottom: 1px solid #979797;
		cursor: pointer;
		border-radius: 5px;

		&::placeholder {
			padding-left: 1rem;
			color: #ffffff;
		}

		&:focus {
			outline: none;
			background-color: #014e56;
			color: #ffffff;
		}
	}

	textarea {
		width: 100%;
		background-color: #014e56;
		height: 4rem;
		border: none;
		border-bottom: 1px solid #979797;
		margin-bottom: 1.3rem;
		border-radius: 5px;

		&:focus {
			outline: none;
		}
		&::placeholder {
			padding-left: 1rem;
			color: #ffffff;
		}
	}
`;

export default Form