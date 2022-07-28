import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import api from '../_services/UserRegService';
import { useNavigate } from 'react-router-dom';
import {Nav,Footer} from '_layout'


export {Signup}

const Signup = () => {
	const paperStyle = {backgroundColor: '#DCDCDC', padding: 20, width: 350, margin: '0 auto' };
	const headerStyle = { margin: 0 };
	const textStyle = {marginTop: '4px', marginBottom: '18px'}
	const buttonSignup = {backgroundColor: '#3371B5'}	
	const [ details, setDetails ] = useState({ firstName: '',lastName:'', email: '', address: '', password: '' });
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const navigate = useNavigate();

	// Delete in prod
	console.log('Hello there', details);

	const handleSignup = async (data) => {
		await api.signupDetails(data).then(() => {
			navigate('/');
		});
	};

	return (
		<>
		<Nav/>
		<Grid>
			<Paper style={paperStyle}>
				<Grid align="center">
					
					<h2 style={headerStyle}>Sign Up</h2>
					<Typography variant="caption" gutterBottom>
						Please fill this form to create an account !
					</Typography>
				</Grid>
				<TextField style={textStyle}
					onChange={(e) => {
						setDetails({ ...details, firstName: e.target.value });
					}}
					fullWidth
					label="FirstName"
					name="firstName"
					placeholder="Enter your first name"
				/>
				<TextField style={textStyle}
					onChange={(e) => {
						setDetails({ ...details, lastName: e.target.value });
					}}
					fullWidth
					label="LastName"
					name="lastName"
					placeholder="Enter your last name"
				/>
				<TextField style={textStyle}
					onChange={(e) => {
						setDetails({ ...details, email: e.target.value });
					}}
					fullWidth
					label="Email"
					name="email"
					placeholder="Enter your email"
				/>

				<TextField style={textStyle}
					onChange={(e) => {
						setDetails({ ...details, address: e.target.value });
					}}
					fullWidth
					label="Address"
					name="address"
					placeholder="Enter your address"
				/>
				<TextField style={textStyle}
					onChange={(e) => {
						setDetails({ ...details, password: e.target.value });
					}}
					fullWidth
					label="Password"
					name="password"
					placeholder="Enter your password"
				/>
				<TextField style={textStyle}
					onChange={(e) => {
						setConfirmPassword(e.target.value);
					}}
					fullWidth
					label="Confirm Password"
					name="confirm password"
					placeholder="Confirm your password"
				/>
			
				<Button style={buttonSignup}
					type="submit"
					onClick={() => {
						handleSignup(details);
					}}
					variant="contained"
					
				>
					Sign up
				</Button>
			</Paper>
		</Grid>
		<Footer/>
		</>
	);
};

