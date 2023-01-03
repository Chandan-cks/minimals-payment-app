import * as React from 'react';
import img from './minimals.png'


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
// import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import ShieldIcon from '@mui/icons-material/Shield';





const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Payment() {
    return (
        <>
        <Box sx={{height:'80px'}}>
            <Box sx={{marginTop: '20px'}}>
                <Grid container spacing={2} sx={{paddingLeft: '24px',paddingRight: '24px',position: 'relative',display: 'flex',alignItems: 'center',fontWeight: '700',justifyContent: 'space-between'}}>
                    <Avatar src={img}></Avatar>
                    <Typography variant='h6' sx={{textAlign:'center',margin: '0px',fontWeight: '600',lineHeight: '1.57143',fontSize: '0.875rem',fontFamily: `"Public Sans", sans-serif`,textDecoration: 'none',color: 'inherit'}}>Need Help?</Typography>
                </Grid>
            </Box>
        </Box>

        <Typography variant="h4" sx={{textAlign:'center',fontSize:'2rem',margin:'0px 0px 16px',fontWeight:'700',lineHeight:'1.5',fontFamily:'sans-serif'}}>Let's finish powering you up!</Typography>
        <Typography variant="h6" sx={{textAlign:'center',fontSize:'1rem', margin: '0px 0px 40px',lineHeight: '1.5',fontFamily: `"Public Sans", sans-serif`,fontWeight: '400',color: 'rgb(99, 115, 129)'}}>Professional plan is right for you.</Typography>
          
        <Box sx={{boxSizing: 'border-box',display: 'flex',flexFlow: 'row wrap',marginTop: '-24px',width: 'calc(82% + 100px)',marginLeft: '130px'}}>
            
            <Box sx={{paddingLeft: '24px',paddingRight: '24px',paddingTop: '24px',boxSizing: 'border-box',border: '1px dashed grey'}}>
                
                <Box sx={{gridTemplateColumns: 'repeat(2, 1fr)', display:'flex',padding: '40px',border: '1px dashed rgba(145, 158, 171, 0.24)'}}>
                    <Box>
                        <Typography variant="h6" sx={{margin: '0px',fontWeight: '700',lineHeight: '1.55556',fontSize: '1.0625rem',fontFamily: '"Public Sans", sans-serif'}} gutterBottom>Billing Address</Typography>
                        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },display: 'inline-flex',flexDirection: 'column',position: 'relative'}} noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Person name" variant="outlined" />
                            <TextField id="outlined-basic" label="Phone number" variant="outlined" />
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Address" variant="outlined" />
                        </Box>
                    </Box>

                    <Box sx={{display: 'flex',flexDirection: 'column'}}>
                        <Typography variant="h6"sx={{margin:'0px 0px -25px 0px',fontSize: '1rem'}} gutterBottom>Payment method</Typography>
                        <Box sx={{margin: '40px 0px 0px',display: 'flex',flexFlow: 'column wrap'}}>
                            <Box sx={{display: 'flex',flexDirection: 'column'}}>
                                <Box sx={{backgroundColor: 'rgb(255, 255, 255)',color: 'rgb(33, 43, 54)',borderRadius: '8px',border: '1px solid rgba(145, 158, 171, 0.24)',backgroundImage: 'none',display: 'flex',alignItems: 'center',position: 'relative',transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',boxShadow: 'rgb(145 158 171 / 16%) 0px 20px 40px'}}>
                                    <FormControl sx={{padding:'5px'}}>
                                        <RadioGroup row sx={{}} aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                            <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
                                            <CurrencyRubleIcon sx={{marginTop: '10px',color: 'blue',marginLeft:'74px'}}/>
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                                <Box sx={{backgroundColor: 'rgb(255, 255, 255)',marginTop:'15px',color: 'rgb(33, 43, 54)',borderRadius: '8px',border: '1px solid rgba(145, 158, 171, 0.24)',backgroundImage: 'none',display: 'flex',alignItems: 'center',position: 'relative',transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',boxShadow: 'rgb(145 158 171 / 16%) 0px 20px 40px'}}>
                                    <FormControl sx={{padding:'5px'}}>
                                        <RadioGroup row sx={{}} aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                            <FormControlLabel value="Credit" control={<Radio />} label="Credit/Debit card" />
                                            <CreditCardIcon  sx={{marginTop: '10px',color: 'blue'}}/>
                                            <Typography variant='h6'sx={{fontFamily: '"Roboto","Helvetica","Arial",sansSerif',fontWeight: '400',fontSize: '1rem',lineHeight: '3',letterSpacing: '0.0075em',marginLeft: '5px'}}>VISA</Typography>
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>
            
            <Box sx={{paddingLeft:'24px',paddingTop:'24px',flexBasis:'33.3333%',flexGrow:'0',maxWidth:'33.3333%',boxSizing:'border-box',flexDirection:'row'}}>
                <Box sx={{padding: '40px',borderRadius:'16px',backgroundColor: 'rgb(244, 246, 248)'}}>
                    <Typography variant='h6'sx={{fontSize:'1rem',fontWeight:'400'}}>Summary</Typography>
                    <Box sx={{display: 'flex',flexDirection: 'column'}}>
                        <Box sx={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between'}}>
                            <Typography variant='h6' sx={{marginTop:'5px',lineHeight:'1',fontSize:'0.875rem',fontFamily:'"Public Sans",sans-serif',fontWeight:'400',color:'rgb(99,115,129)'}}>Subscription</Typography>
                            <Typography variant='h6' sx={{height: '24px',minWidth: '22px',lineHeight: '0',borderRadius: '6px',cursor: 'default',alignItems: 'center',whiteSpace: 'nowrap',display: 'inline-flex',justifyContent: 'center',textTransform: 'capitalize',padding: '0px 8px',color: 'rgb(183, 29, 24)',fontSize: '0.75rem',fontFamily: '"Public Sans", sans-serif',backgroundColor: 'rgba(255, 86, 48, 0.16)',fontWeight: '700'}}>PREMIUM</Typography>
                        </Box>
                        <Box sx={{margin: '20px 0px 0px',display: 'flex',flexDirection: 'row',justifyContent: 'space-between'}}>
                            <Typography variant='h6' sx={{margin: '0px',lineHeight: '1.57143',fontSize: '0.875rem',fontFamily: '"Public Sans", sans-serif',fontWeight: '400',color: 'rgb(99, 115, 129)'}}>Billed Monthly</Typography>
                            <Switch sx={{display: 'inline-flex',overflow: 'hidden',boxSizing: 'border-box',position: 'relative',flexShrink: '0',zIndex: '0',verticalAlign: 'middle',padding: '9px 13px 9px 12px',width: '58px',height: '38px'}} {...label} defaultChecked />
                        </Box>

                        <Box sx={{display: 'flex',flexDirection: 'row',justifyContent: 'flex-end'}}>
                            <Typography sx={{fontSize: '1rem',lineHeight: '0.5'}}>$</Typography>
                            <Typography sx={{fontSize: '3rem',fontWeight: '800',lineHeight: '1.33333',margin: '0px 0px 0px 8px'}}>9.99</Typography>
                            <Typography sx={{lineHeight: '1.5',fontSize: '1rem',fontFamily: '"Public Sans", sans-serif',fontWeight: '400',color: 'rgb(99, 115, 129)',alignSself: 'center',margin: '0px 0px 0px 8px'}}></Typography>
                        </Box>
                        <hr sx={{flexShrink: '0',borderWidth: '0px 0px thin',borderColor: 'rgba(145, 158, 171, 0.24)',borderStyle: 'dashed'}} />
                        <Box sx={{display: 'flex',margin: '20px 0px 0px',flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                            <Typography variant='h6' sx={{fontSize: '1.125rem',fontWeight: '700',lineHeight: '1.55556',fontFamily: '"Public Sans", sans-serif'}}>Total Billed</Typography>
                            <Typography variant='h6' sx={{fontSize: '1.125rem',fontWeight: '700',lineHeight: '1.55556',fontFamily: '"Public Sans", sans-serif'}}>$9.99*</Typography>
                        </Box>
                        <hr sx={{flexShrink: '0',borderWidth: '0px 0px thin',borderColor: 'rgba(145, 158, 171, 0.24)',borderStyle: 'dashed'}} />
                        
                    </Box>
                    <Box sx={{}}>
                        <Typography variant='h6' sx={{margin: '8px 0px 0px',lineHeight: '1.5',fontSize: '0.75rem',fontFamily: '"Public Sans", sans-serif',fontWeight: '400',color: 'rgb(99, 115, 129)'}}>* Plus applicable taxes</Typography>
                    </Box>
                    <Stack spacing={2} direction="row">
                        <Button variant="Upgrade" sx={{display: 'inline-flex',alignItems: 'center',justifyContent: 'center',position: 'relative',boxSizing: 'border-box',webkitTapHighlightColor: 'transparent',outline: '0px',border: '0px',margin: '40px 0px 24px',cursor: 'pointer',userSelect: 'none',verticalAlign: 'middle',appearance: 'none',textDecoration: 'none',fontWeight: '700',lineHeight: '1.71429',textTransform: 'capitalize',fontFamily: '"Public Sans", sans-serif',minWidth: '64px',padding: '8px 22px',borderRadius: '8px',color: 'rgb(255, 255, 255)',backgroundColor: 'rgb(0, 171, 85)',width: '100%',boxShadow: 'none',height: '48px',fontSize: '15px',transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}>Upgrade My Plan</Button>
                    </Stack>
                    <Box sx={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                        <Box sx={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
                            <ShieldIcon sx={{width: '20px',height: '20px',color:'rgb(0, 171, 85)'}} />
                            <Typography sx={{margin: '0px 0px 0px 8px',fontWeight: '600',lineHeight: '1.57143',fontSize: '0.875rem',fontFamily: '"Public Sans", sans-serif'}}>Secure credit card payment</Typography>
                        </Box>
                        <Typography sx={{margin: '8px 0px 0px',lineHeight: '1.5',fontSize: '0.75rem',fontFamily: '"Public Sans", sans-serif',fontWeight: '400',color: 'rgb(99, 115, 129)',textAlign: 'center'}}>This is a secure 128-bit SSL encrypted payment</Typography>
                    </Box>
                </Box>
                <Box sx={{padding: '4px',right: '24px',bottom: '24px',zIndex: '999',position: 'fixed',borderRadius: '50%',boxShadow: 'rgb(99 115 129 / 36%) -12px 12px 32px -4px',backdropFilter: 'blur(6px)',backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                    <Box sx={{display: 'inline-flex'}}>
                        <Button variant="Upgrade" sx={{display: 'inline-flex',alignItems: 'center',justifyContent: 'center',position: 'relative',boxSizing: 'border-box',webkitTapHighlightColor: 'transparent',backgroundColor: 'transparent',outline: '0px',border: '0px',margin: '0px',cursor: 'pointer',userSelect: 'none',verticalAlign: 'middle',appearance: 'none',textDecoration: 'none',textAlign: 'center',flex: '0 0 auto',fontSize: '1.5rem',borderRadius: '50%',overflow: 'visible',transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',color: 'rgb(0, 171, 85)',padding: '10px'}}></Button>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    )
}