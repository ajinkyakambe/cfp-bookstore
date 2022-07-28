import { styled } from '@mui/material/styles';

export default styled(() => ({
    media: {
        height: '540px',
        paddingTop: '100%',

    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        color: 'white',
        width: '100%',
        height: '40px',

    },

}));