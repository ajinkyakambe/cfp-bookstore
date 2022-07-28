import React, { useState } from 'react';
import { TextField, Stack, PrimaryButton } from '@fluentui/react';
import api from '../_services/UserRegService';
import { useNavigate } from 'react-router-dom';

export {ForgotPassword}

const ForgotPassword = () => {
	const [ email, setEmail ] = useState('');
	const [ newPassword, setNewPassword ] = useState('');
	const data = {email: email , password:newPassword};
	const navigate = useNavigate();

	const handleForgotPassword = async (data) => {
		const pass = await api.forgotPassword(data);
		if(pass.status===200) {
			navigate('/');
		}
	};

	return (
		<Stack  horizontalAlign='center' verticalFill>
		<Stack verticalAlign='center' styles={{root:{ height:500, width:500}}} verticalFill>
		<Stack verticalAlign='center'  horizontalAlign='center' styles={{root:{backgroundColor:'#63C5DA' ,paddingBottom:24, border:'2px solid black'}}}>
		
		<TextField
				onChange={(e, value) => {
					setEmail(value);
				}}
				styles={{ root: { width: 500, padding:24 } }}
				value={email}
				required
				label="Email"
			/>
			<TextField
				onChange={(e, value) => {
					setNewPassword(value);
				}}
				styles={{ root: { width: 500 , padding:24 } }}
				value={newPassword}
				required
				label="New Password"
			/>
			<Stack horizontalAlign='center'>
			<PrimaryButton onClick={()=> {
				const data = {email: email , password:newPassword};
				handleForgotPassword(data);
			}} disabled={!email.length||!newPassword.length} styles={{root:{ width:100}}}  text={"submit"} />
			</Stack>
		</Stack>
		</Stack>
		</Stack>
	);
};
