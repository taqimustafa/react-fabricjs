import React from "react";

import CanvasBoxCSS from "./CanvasBox.css";

import ZoomToolbox from "./ZoomToolbox/ZoomToolbox.js";
import Toolbar from "./Toolbar/Toolbar.js";

import Canvas from "./fabric-components/Canvas.js";
import Image from "./fabric-components/Image.js";
import Text from "./fabric-components/Text.js";

import FabricStore from "../../stores/FabricStore.js";

export default class CanvasBox extends React.Component {
  constructor() {
    super();
    this.state = {
      activeObject:null
    };
  }
  componentDidMount(){
    var c = new Canvas({
      width:600,
      height:400,
      id:'canvas'
    });
    c.init();
    c.addTshirtOverlay('media/front.png');
    c.centerCanvas();
    
    // var image = new Image({
    //   src:'media/image.png'
    // });
    // image.create();
    // var image = new Image({
    //   src:'media/Placeholder.jpg',
    // });
    // image.create();

    // var tempText = new Text();
    // tempText.create();
  }
  componentWillMount(){
    FabricStore.on("change",() => {
      this.setState({
        activeObject:FabricStore.getActiveObject()
      });
    });
  }

  render() {
    return (
      <div class="canvas-box">
        <Toolbar activeObject={this.state.activeObject}/>
        <div class="section no-pad-bot no-pad-top">
          <canvas id = "canvas"></canvas>
        </div>
        <ZoomToolbox />
      </div>
    );
  }
}