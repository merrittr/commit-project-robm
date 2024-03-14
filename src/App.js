
// @flow

import React, { Component } from 'react'
//import { Icon } from "leaflet";
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
    iconSize: [10,10],
    iconAnchor: [10,10],//[32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
    });


    const myIconMarker = Leaflet.icon({
    iconUrl: require('./images/markerRed.svg'),
    iconSize: [10,10],
    iconAnchor: [10,10],//[32, 64],
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
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={myIconMarker} position={[this.props.coords.latitude, this.props.coords.longitude]}>
          <Popup>
            You are here. <br /> Ya you.
          </Popup>
        </Marker>


      {hydroData.features.map(hydat => (
       <Marker 
       /*icon={myIconDrop}*/
       key={hydat.properties.STATION_ID} 
       position={[
         hydat.geometry.coordinates[0],
         hydat.geometry.coordinates[1]
       ]}
       >
      <Popup>
      {hydat.properties.STATION_ID} <br /> {hydat.properties.NAME} <br />
        <a href={"https://merrittr.shinyapps.io/hydroshiny/?y=waterlevel&z=" + hydat.properties.STATION_ID} rel="noopener noreferrer" target="_blank">Water Level (m)</a> <br />
        <a href={"https://merrittr.shinyapps.io/hydroshiny/?y=DischargeDebit&z=" + hydat.properties.STATION_ID} rel="noopener noreferrer" target="_blank">Discharge (cms)</a>
       </Popup>
      </Marker>
      ))}
      </Map>) 
      :
      (<Map center={[52.1332, -106.6700]} zoom={5}>
        <TileLayer
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      <Marker icon={myIconMarker} position={[52.1332, -106.6700]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
       
      {hydroData.features.map(hydat => (
       <Marker 
       /*icon={myIconDrop}*/
       key={hydat.properties.STATION_ID} 
       position={[
         hydat.geometry.coordinates[0],
         hydat.geometry.coordinates[1]
       ]}
       >
          <Popup>
          <a href={"https://merrittr.shinyapps.io/hydroshiny/?y=waterlevel&z=" + hydat.properties.STATION_ID} rel="noopener noreferrer" target="_blank">Hydrometric station <br /> {hydat.properties.STATION_ID} <br /> {hydat.properties.NAME}</a> 
          </Popup>
      </Marker>
      ))}
      </Map>)
    )
  }
}

 export default geolocated({
   positionOptions: {
       enableHighAccuracy: false,
   },
   userDecisionTimeout: 5000,
 })(Hydro);