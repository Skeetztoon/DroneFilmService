import React from "react";
import "../styles.css";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';

import YoutubeEmbed from "./YoutubeEmbed";


import POINTS from "./points";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const mapState = {
  center: [10.829025, 40.602621],
  zoom: 1.5
};

class Mapa extends React.Component {
  state = {
    selectedPoint: null,
    isOpen: false
  };

  onPlacemarkClick = point => () => {
    this.setState({ selectedPoint: point });
    this.setState({ isOpen: true})
  };

  render() {
    const { selectedPoint } = this.state;
    return (
      <div align='center'>
            <YMaps query={{ lang: "en_US"}}>
              <Map defaultState={mapState} width='60vw' height='50vh'options={{maxZoom: 7, minZoom: 1}}>
                <ZoomControl></ZoomControl>
                  {POINTS.map((point, index) => (
                    <Placemark
                      key={index}
                      geometry={point.coords}
                      onClick={this.onPlacemarkClick(point)}
                    />
                  ))}
              </Map>
            </YMaps>
              {selectedPoint && (
                  <Dialog
                open={this.state.isOpen}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                fullWidth
                maxWidth='lg'
                >
                <DialogTitle>{selectedPoint.title}</DialogTitle>
                    <DialogContent>
                    <YoutubeEmbed embedId={selectedPoint.link} marginBottom='20px'/>
                        <DialogContentText id="alert-dialog-slide-description" sx={{fontWeight: 'bold', color: 'black'}} gutterTop>
                        {selectedPoint.descr}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => this.setState({ isOpen: !this.state.isOpen })} align='center'>Close</Button>
                    </DialogActions>
                </Dialog>
              )}
        
      </div>
    );
  }
}

export default Mapa
