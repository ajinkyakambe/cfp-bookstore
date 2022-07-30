import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import api from '../_services/UserRegService';
import {Nav,Footer} from '_layout'
import {toast} from 'react-toastify'

export {Login}

const Login = ({ handleUserLogin, setUserDetails }) => {
	
	const paperStyle = {  backgroundColor: '#DCDCDC', padding: 10, height: '55vh', width: 350, margin: '0 auto' };
	
	const btnstyle = { margin: '8px 0' };
	const textStyle = {marginTop: '4px', marginBottom: '18px'}
	const [ userLogin, setUserLogin ] = useState({ email: '', password: '' });
	const handleLogin = async (data) => {
		await api.loginDetails(data).then((response) => {
			handleUserLogin();
			setUserDetails(response.data.data);
			toast.success("Successfully logged in")
		});
	};
	return (
		<>
		
		<Grid >
			<Paper style={paperStyle}>
				<Grid align="center">
					
					<h2>Sign In</h2>
				</Grid>
				<TextField style={textStyle}
					onChange={(e) => {
						setUserLogin({ ...userLogin, email: e.target.value });
					}}
					label="UserEmail"
					placeholder="Enter useremail"
					fullWidth
					id="margin-dense" margin="dense"
					required
				/>
				<TextField style={textStyle}
					onChange={(e) => {
						setUserLogin({ ...userLogin, password: e.target.value });
					}}
					label="Password"
					placeholder="Enter password"
					type="password"
					fullWidth
					required
				/>
				
				<Button
					type="submit"
					onClick={() => handleLogin({ ...userLogin })}
					color="primary"
					variant="contained"
					style={btnstyle}
					fullWidth
				>
					Sign in
				</Button>
				<Typography />
				<Typography>
					{' '}
					Do you have an account ?
					<Link href="/signup">Sign Up</Link>
				</Typography>
				<Typography>
					{' '}
					Reset Password ?
					<Link href="/forgotpassword">Forgot Password</Link>
				</Typography>
			</Paper>
		</Grid>
		
		</>
	);
};


