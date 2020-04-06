
// @flow

import React, { Component } from 'react'
import { Icon } from "leaflet";
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import * as hydroData from "./data/hydrometric.json";
import "./App.css";
import "./leaflet.css";
import { geolocated } from "react-geolocated";
Leaflet.Icon.Default.imagePath =  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'
  

  // const drop = new Icon({
  //   iconUrl: "/drop.svg",
  //   iconSize: [5, 5]
  // });

   const iconWaterDrop = new Leaflet.Icon({
     iconUrl: require('./images/drop.svg'),
     iconRetinaUrl: require('./images/drop.svg'),
     iconSize:     [10,10], 
     iconAnchor: null,
     popupAnchor: null,
     shadowUrl: null,
     shadowSize: null,
     shadowAnchor: null,
     className: 'leaflet-div-icon'
 });

 export { iconWaterDrop };

export class Hydro extends Component<{}> {

  



  render() {


    const myIconDrop = Leaflet.icon({
    iconUrl: require('./images/drop.svg'),
    iconSize: [64,64],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
    });


    const myIconMarker = Leaflet.icon({
    iconUrl: require('./images/markerRed.svg'),
    iconSize: [64,64],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
    });

    return (
      this.props.coords 
      ? (<Map center={[this.props.coords.latitude, this.props.coords.longitude]} zoom={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={myIconMarker} position={[this.props.coords.latitude, this.props.coords.longitude]}>
          <Popup>
            You are here. <br /> Ya you.
          </Popup>
        </Marker>
      </Map>) 
      :
      <Map center={[52.1332, -106.6700]} zoom={5}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={myIconDrop} position={[52.1332, -106.6700]}>
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