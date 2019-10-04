import React, { Component } from 'react';
import Button from '../Button';
import RouteMap from './RouteMap';
import Card from '../Card';
import { Redirect } from "react-router-dom";

class ConfirmRoute extends Component{

   render(){
  
  return(
    <div>
      <Card>
        <RouteMap mapboxKey={this.props.mapboxKey} startLat={this.props.startLat} startLng={this.props.startLng} destinationLat={this.props.destinationLat} destinationLng={this.props.destinationLng}/>
      </Card>
    </div>
    )
  }
}

export default ConfirmRoute; 