
// @flow

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import "./leaflet.css"
import Leaflet from 'leaflet'
Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class SimpleExample extends Component<{}, State> {
  state = {
    lat: 52.1332,
    lng: -106.6700,
    zoom: 13, 
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (

      <Map center={position} zoom={this.state.zoom}>
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