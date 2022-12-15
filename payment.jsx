import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Payment() {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Stack direction="row" spacing={2}>
                        <Avatar src="/public/minimals.png"></Avatar>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                Need Help?
                </Grid>  
            </Grid>
        </Box>
        <Typography variant="h4" sx={{textAlign:'center'}}>
            Let's finish powering you up!
        </Typography>
        <Typography variant="h6" sx={{textAlign:'center'}}>
            Professional plan is right for you.
        </Typography>
        <Box sx={{display: 'flex',flexWrap: 'wrap','& > :not(style)': {m: 1,width: 580,height: 458,},}}> 
            <Paper elevation={3}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6}>
                        <Box sx={{ width: '100%' }}>
                            <Stack spacing={2}>
                                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch',marginLeft:'50px',marginTop:'20px' },}}>
                                    <Typography variant="h6" gutterBottom>Billing Address</Typography>
                                    <TextField id="outlined-basic" label="Person Name" variant="outlined" />
                                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>

                    <Box>
                    <FormControl>
                        <Typography variant="h6"sx={{margin:'25px 0px 25px 0px'}} gutterBottom>Payment method</Typography>
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                            
                            <Box component="span" sx={{ border: '1px solid grey',margin:'0px 0px 20px 0px' }}>
                                <FormControlLabel value="Paypal" sx={{padding: '10px'}} control={<Radio />} label="Paypal" />
                                <CurrencyRubleIcon/>
                            </Box>

                            <Box component="span" sx={{ border: '1px solid grey',margin:'0px 0px 20px 0px' }}>
                                <FormControlLabel value="Credit/Debit card" sx={{padding: '10px'}} control={<Radio />} label="Credit/Debit card" />
                                <CreditCardIcon />
                            </Box>
                            
                            <Box component="span" sx={{ border: '1px solid grey',margin:'0px 0px 20px 0px' }}>
                                <FormControlLabel value="UPI ID" sx={{padding: '10px'}} control={<Radio />} label="UPI ID" />
                                <PhonelinkRingIcon/>
                            </Box>

                        </RadioGroup>
                    </FormControl>
                    </Box>
                </Grid>
            </Paper>

            <Paper elevation={3}>
                <Box sx={{width: 300,height: 400,backgroundColor: 'whitesmoke', borderRadius:'10px'}}>
                    <Typography variant="h5" sx={{margin:'0px 20px 0px 20px'}} gutterBottom>Summary</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography variant='h7'sx={{margin:'0px 0px 0px 20px'}}>Subscription</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{width:'50px', height:'5px', margin:'20px 0px -5px 0px'}}>
                                    <Typography variant='h7'sx={{backgroundColor:'red'}}>PREMIUM</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant='h7'sx={{margin:'10px'}}>Billed Monthly</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Switch {...label} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3"  gutterBottom>$ 9.99 /mo</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h5"  gutterBottom>Total Billed</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5"  gutterBottom>$9.99*</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6"  gutterBottom>*Plus applicable taxes</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" textAlign='center'>Upgrade my plan</Button>
                            </Grid>
                        </Grid>
                    </Box> 
                </Box>
            </Paper>
        </Box>
        </>
    )
}