import React from 'react';
import Button from '@mui/material/Button';
import { Container} from '@mui/system';
import { Toolbar, AppBar, Typography, Box, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles  } from '@mui/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1
    }, 
    toolbarStyle: {
        minHeight: '300px'
      },
    title: {
        flexGrow: 1,
        align: 'center' 
      },
    link: {
      color: 'white',
        '&:hover': {
          color: 'black',
          },
        '&:visited': {
          color: 'White',
          },
      textDecoration: 'none',
    }
    
}))

export default function Header () { 
    const classes = useStyles();
    const [value, setValue] = React.useState("recents")
  
    const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };

    return (
    <AppBar position='fixed'  sx={{ bgcolor: "black", height: "7vh" }} >
        <Container fixed>
          <Toolbar className={classes.toolbarStyle}>
          
            <Typography variant='h3' className={classes.title}><Link to='/' className={classes.link}>Drone Film Service</Link></Typography>
            <Box mr={3}>
              <Button color='inherit' variant='contained' onClick={handleClickOpen}><Typography color='#000000' component='h4' variant='h9'>Contact us</Typography></Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
                <DialogContent>
                  <DialogContentText>Share your incredible filming ideas</DialogContentText>
                  <TextField autoFocus margin="dense" id='name' label='Your Email' type='email' fullWidth/>
                  <TextField margin="dense" id='pass' label='Short Description of Your Project' type='' fullWidth/>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>Send</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Typography variant='h4' marginRight={useTheme().spacing(3)}>|</Typography>
            <Button color='inherit' variant='outlined'><Link to='/about' className={classes.link}>About us</Link></Button>
          </Toolbar>
        </Container>
    </AppBar>
    )
}