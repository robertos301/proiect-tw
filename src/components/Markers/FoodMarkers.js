import React, { Component } from "react";
import { LocationConsumer } from "../../context";
import { Marker } from "react-google-maps";
import { IoIosPizza } from "react-icons/io";

export default class FoodMarkers extends Component {
  render() {
    const { id, type, lat, lng } = this.props.location;
    //use for later onClickSelect
    //console.log(id,type,lat,lng);
    return (
      <LocationConsumer>
        {value => {
          if (type === "food")
            return (<Marker label="F" position={{ lat: lat, lng: lng }} />);
          else if (type === "visit")
            return (<Marker label="v" position={{ lat: lat, lng: lng }} />);
          else if(type === "shop")
          return (<Marker label="S" position={{ lat: lat, lng: lng }} />);
        }}
      </LocationConsumer>
    );
  }
}
