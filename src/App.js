import React, { Component } from 'react';
import { Map } from 'google-maps-react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

  render() {
    return (
      <Map
       google={this.props.google}
       zoom={14}
       initialCenter={{
         lat: 51.5192789,
         lng: -0.1321629
        }}
         >

         <Marker
          onClick={this.onMarkerClick}
          name={'The British Museum'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}





export default GoogleApiWrapper({
  apiKey: 'AIzaSyCxDo7FYVQ_ODBOyXNRBorsIxZW-kbAsEw'
})(MapContainer);
