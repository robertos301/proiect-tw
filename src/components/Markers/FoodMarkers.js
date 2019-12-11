import React, { Component } from 'react'
import {LocationConsumer} from '../../context'
import {Marker} from 'react-google-maps'
import {IoIosPizza} from "react-icons/io";

export default class FoodMarkers extends Component {
   

    render() {
        return (
           <LocationConsumer>
            {(value) => {
                return value.foodLocations.map(item =>{
                    return <Marker  label="F" position={{lat: item.lat,lng: item.lng}} />
                })
            }} 
            </LocationConsumer>
        )
    }
}



