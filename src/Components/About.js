import React from "react"
import { Typography, Paper, Grid, cardClasses, Card, CardMedia} from '@mui/material';
import { Container } from "@mui/system";
import prekl from '../prekl.gif';
import olga from '../olga.png';
import { makeStyles  } from '@mui/styles';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
//////////////////////////////////////////////////////////////////////////////////
function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  };

function SimpleSnackbar() {
    const [open, setOpen] = React.useState({
        open: true,
        Transition: Slide
    });
  
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <div>
            <img src={olga} width='250px' height='auto' draggable="false"></img>
        </div>
        <div><IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        </div>
      </React.Fragment>
    );
  
    return (
      <div>
        <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          open={open}
          onClose={handleClose}
          action={action}
          key={SlideTransition}
          TransitionComponent={open.Transition}
        />
      </div>
    );
  }

//////////////////////////////////////////////////////////////////////////////////


const useStyles = makeStyles(() => ({
    div: {
        position: "absolute",
        width: "400px",
        height: "300px",
        backgroundColor: "#ff0",
        right: "0",
        left: "0",
        margin: "auto",
        top: "30%"
    },
    img: {
        display: "block",
        margin: "0 auto",
        width: "200px",
        height: "auto"
    },
    t: {
        color: 'red'
    }
}));


export default function About() {
    const classes = useStyles();
    return (
    <>
        <div className={classes.div}>
        <Container>
            <Typography variant='h4' align='center' className={classes.t}>Ваша карта заблокирована</Typography>
            <div>
                <img src={prekl} className={classes.img} draggable="false"></img>
            </div>
        </Container>
        </div>
        <div>
            <SimpleSnackbar/>
        </div>
    </>
    )
}
