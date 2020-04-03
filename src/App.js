
// @flow

import React, { Component } from 'react'

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import * as hydroData from "./data/hydrometric.json";
import "./App.css";
import "./leaflet.css"
import Leaflet from 'leaflet'
import { geolocated } from "react-geolocated";
Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'
  


// type State = {
//   lat: number,
//   lng: number,
//   zoom: number,
// }
//<{}, State & GeolocatedProps>
export /*default*/ class Hydro extends Component<{}> {
  // state = {
  //   lat: 52.1332,
  //   lng: -106.6700,
  //   zoom: 13, 
  // }
  
  render() {
    //const position = [this.state.lat, this.state.lng]

    //const position = [{this.props.coords.latitude}, {this.props.coords.longitude}]
    const position = [52.1332, -106.6700]
    
    return (

      <Map center={position} zoom={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

 export default geolocated({
   positionOptions: {
       enableHighAccuracy: false,
   },
   userDecisionTimeout: 5000,
 })(Hydro);