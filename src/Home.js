import React, { Component } from 'react';
import Map from './Map';
import VideoBg from "reactjs-videobg";
import mp4 from "./Untitled.mp4";
import Menubar from "./Menubar";
import InfoBar from "./InfoBar"
import {LocationConsumer} from "./context"

class Home extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Menubar/>
				<VideoBg>
  					<VideoBg.Source src={mp4} type="video/mp4" />
				</VideoBg>
				<Map
					google={this.props.google}
					center={{lat: 45.760696, lng: 21.226788}}
					height='300px'
					zoom={15}
				/>
				{/* card-ul */}
			<div>
			<LocationConsumer>
			{(value) => {
				return value.foodLocations.map(location => {
					return <InfoBar key={location.id} location = {location}/>;
				})
			}}
			</LocationConsumer>
			</div>
			</div>
		);
	}
}

export default Home;
