import React, { Component } from "react";
import Map from "./Map";
import VideoBg from "reactjs-videobg";
import mp4 from "../getf.mp4";
import Menubar from "./Menubar";
import InfoBar from "./InfoBar";
import { LocationConsumer } from "../context";
import Grid from "@material-ui/core/Grid";
import { makeStyles} from '@material-ui/core/styles';


class Home extends Component {
 
	 
	render() {
    return (
      <div style={{ margin: "100px" }}>
        <Menubar />
        <VideoBg>
          <VideoBg.Source src={mp4} type="video/mp4" />
        </VideoBg>
        ;
        <Map
          google={this.props.google}
          center={{ lat: 45.760696, lng: 21.226788 }}
          height="300px"
          zoom={15}
        />
		<div style={{marginTop:'240px'}}>
        
            <LocationConsumer>
              {value => {
                return value.foodLocations.map(item => {
                  
                  return (
                    <InfoBar
                    
                      key={item.id}
                      locations={item}
                      selectItem={value.selectItem}
					  
                    />
                  );
                });
              }}
            </LocationConsumer>
         
		</div>
      </div>
    );
  }
}

export default Home;
