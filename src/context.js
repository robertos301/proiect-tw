import React, { Component } from "react";
import {foodPlaces} from "./data";

const LocationContext = React.createContext();

class LocationProvider  extends Component {
    state={
        foodLocations: [],
        visitLocations: []
    };

    componentDidMount(){
        this.setLocations();
    }

    setLocations= () => {
        let tempLocations = [];
        foodPlaces.forEach(item => {
            const singleItem = {...item};
            
            tempLocations = [...tempLocations, singleItem];
        });
        this.setState( ()=> {
            return { foodLocations: tempLocations};
        });
    };



    render() {
        return(
            <LocationContext.Provider 
             value={{
                 ...this.state
             }}
             >
                {this.props.children}
            </LocationContext.Provider>
        );
    }



}

const LocationConsumer = LocationContext.Consumer;
export  {LocationProvider, LocationConsumer};