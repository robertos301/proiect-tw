import React, { Component } from "react";
import { locationPlaces } from "./data";

const LocationContext = React.createContext();

class LocationProvider extends Component {
  state = {
    foodLocations: [],
    selectedLocation: {}
  };

  componentDidMount() {
    this.setLocations();
  }

  setLocations = () => {
    let tempLocations = [];
    locationPlaces.forEach(item => {
      const singleItem = { ...item };

      tempLocations = [...tempLocations, singleItem];
    });
    this.setState(() => {
      return { foodLocations: tempLocations };
    });
  };

  getItem = id => {
    const location = this.state.foodLocations.find(item => item.id === id);
    //  console.log("Valoriile globale din state sunt: ")
    // console.log(this.state.foodLocations);
    return location;
  };

  selectItem = async id => {
    let tempLocations = [...this.state.foodLocations];
    const index = tempLocations.indexOf(this.getItem(id));
    const location = tempLocations[index];

    await this.setState({ selectedLocation: location });

    console.log(this.state.selectedLocation);
  };

  render() {
    return (
      <LocationContext.Provider
        value={{
          ...this.state,
          selectItem: this.selectItem
        }}
      >
        {this.props.children}
      </LocationContext.Provider>
    );
  }
}

const LocationConsumer = LocationContext.Consumer;
export { LocationProvider, LocationConsumer };
