import React, { useState} from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

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
			<input type="submit" value="submit" />
		</FormStyle>
	);
}


const FormStyle = styled.form`
  
`

export default Form