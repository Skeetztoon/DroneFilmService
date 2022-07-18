import React from 'react';
import { Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles  } from '@mui/styles';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';

const useStyles = makeStyles(() => ({
    socialButton: {
        color: 'black',
        '&:hover': {
        color: 'red',
        },
      },
}))

export default function Footer() {
    const classes = useStyles();
    return (
    <footer>
        <Typography gutterTop align="center" variant='h6' color='textPrimary' gutterBottom>FOLLOW OUR SOCIALS</Typography>

        <Container align="center">
          <Button variant='component' onClick={event =>  window.location.href='www.instagram.com'} className={classes.socialButton}><InstagramIcon/></Button>
          <Button variant='component' onClick={event =>  window.location.href='www.twitter.com'} className={classes.socialButton}><TwitterIcon/></Button>
          <Button variant='component' onClick={event =>  window.location.href='www.facebook.com'} className={classes.socialButton}><FacebookIcon/></Button>
        </Container>
        <Typography align='center' variant='subtitle1' color='textSecondary' gutterTop>ИСиТ2-1б | Юрлов Д.А. Нищёва Е.А.</Typography>
        <Typography align='center' variant='subtitle1' color='textSecondary'>2022</Typography>
      </footer>
    )
}