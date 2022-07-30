import React from "react";
import './adressbookcart.scss';
import { Box, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import UserRegService from "../_services/UserRegService";



const nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
const mobNumRegex = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
const addRegex = /\w+(\s\w+){2,}/;
const cityRegex = /^[A-Z][A-Z a-z]{3,}$/;

function AdressBookCart(props) {
const[addDetails, setAddDetails] = React.useState({fullAddress: '', city: '', state:'',  adressType: '', mobileNum: '', fullName: ''  })

    function takeAddress(event) {
        setAddDetails({ ...addDetails, fullAddress: event.target.value })
    }
    function takeCity(event) {
        setAddDetails({ ...addDetails, city: event.target.value })
    }
    function takeState(event) {
        setAddDetails({ ...addDetails, state: event.target.value })
    }
    function takeName(event) {
        setAddDetails({ ...addDetails, fullName: event.target.value })
    }
    function takeMobNum(event) {
        setAddDetails({ ...addDetails, mobileNum: event.target.value })
    }
    const handleChange = (event) => {
        console.log(event.target.value)
        setAddDetails({ ...addDetails, adressType: event.target.value })
    }
    



    const onClickingContinue = (event) => {

        console.log(event);

        // UserRegService.addCustomer(addDetails).then((res) => {
        //     console.log(res);
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
        props.handleOrderDisplay();

    }

    return (
        <>
            <Box className="address-box-one">
                <div className="cart-address-text">Customer Details</div>
            </Box>
            
            <Box className="address-box-two">
                <Box className="textfield-box-one">
                    <TextField id="outlined-basic" label=" Name" variant="outlined" size="medium" className="box-one-textfield" onChange={takeName}/>
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" size="medium" className="box-one-textfield" onChange={takeMobNum}/>
                </Box>
                <Box className="textfield-box-two">
                    <TextField className="address-textfield"
                        id="outlined-multiline-static"
                        label="Address"
                        multiline
                        rows={3}
                        onChange={takeAddress}
                    />
                </Box>
                <Box className="textfield-box-three">
                    <TextField id="outlined-basic" label="City/Town" variant="outlined" size="medium" className="box-one-textfield" onChange={takeCity} />
                    <TextField id="outlined-basic" label="Landmark" variant="outlined" size="medium" className="box-one-textfield" onChange={takeState} />
                </Box>
                <Box className="textfield-box-four">

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"

                            onChange={handleChange}
                        >
                            <FormControlLabel name='addressType' value="Home" control={<Radio />} label="Home" />
                            <FormControlLabel name='addressType' value="Work" control={<Radio />} label="Work" />
                            <FormControlLabel name='addressType' value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>


                </Box>
            </Box>
            <Box className="address-box-three">
                {
                    props.orderDisplay ? null :
                        <Button sx={{padding: '1% 8%',
                        fontSize: '14px!important',
                        backgroundColor: '#3371B5'}} variant="contained" className="place-order-button" onClick={onClickingContinue}>Continue</Button>
                }
            </Box>

            
        </>

    )
}

export default AdressBookCart