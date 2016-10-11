import React from "react";

import Fabric_Zoom from "../fabric-components/Zoom.js";
import ToolboxCSS from "./Toolbox.css";

export default class Toolbox extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom:null
    }
  }
  componentDidMount(){
    this.setState({
      zoom: new Fabric_Zoom()
    });
  }
  zoomOut(){
    this.state.zoom.zoomOut();
  }
  zoomIn(){
    this.state.zoom.zoomIn();
  }
  render() {
    return (
      <div class="canvas-toolbox">
        <i onClick={this.zoomOut.bind(this)} class="fa fa-search-minus" aria-hidden="true"></i>
        <i onClick={this.zoomIn.bind(this)} class="fa fa-search-plus" aria-hidden="true"></i>
      </div>
    );
  }
}