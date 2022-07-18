import React from 'react';
import { Container} from '@mui/system';
import { Typography, Paper, Grid} from '@mui/material';
import { makeStyles  } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Vid from '../Konduki-Promo_Trim.mp4';
import Mapa from '../Maps/MapsIndex';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1
    }, 
    mainFeaturesPost: {
        position: 'relative',
        color: useTheme().palette.common.white,
        marginBottom: useTheme().spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "80vh"
      },
    videoTag: {
        position: "absolute",
        zIndex: 0,
        top: "0px",
        left: "0px",
        minWidth: "100%",
        minHeight: "100%",
        width: "auto",
        height: "80vh",
      },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0,.9)"
      },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: useTheme().spacing(3),
        marginTop: useTheme().spacing(15)
      },
    mainContent: {
        marginBottom:useTheme().spacing(3)
      },
    a: {
        color: 'white',
        '&:hover': {
          color: 'black',
          },
        '&:visited': {
          color: 'White',
          },
      }
}))

export default function Main () {
    const classes = useStyles();
    return (
    <main>
        <Paper className={classes.mainFeaturesPost} style={{backgroundColor:'#141414'}}>
          <Container fixed>
          <video className={classes.videoTag} autoPlay loop muted>
            <source src={Vid} type='video/mp4' />
          </video>
            <Grid container>
            <div className={classes.overlay}></div>
              <Grid item md={8}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component='h1' variant='h3' color='white' gutterBottom>Team of professionals</Typography>
                  <Typography component='h3' variant='h4' color='white' paragraph>Ready to make your dream shot become real</Typography>
                  <Typography component='h3' variant='h7' color='inherit'><a href='#main' className={classes.a}>LEARN MORE</a></Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}><a name="main"></a>
          <Container maxWidth='md'>
            <Typography variant="h2" align="center" color='textPrimary' gutterBottom>Check out our cinematics</Typography>
          </Container>
        </div>
        <Paper className={classes.mainFeaturesPost} style={{backgroundColor:'#141414', height: '50vh'}}>
          <Container>
              <Mapa />
          </Container>
        </Paper>
      </main>
    )
}