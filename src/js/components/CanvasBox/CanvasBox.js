import React from "react";

import CanvasBoxCSS from "./CanvasBox.css";

import Toolbox from "./Toolbox/Toolbox.js";

import Canvas from "./fabric-components/Canvas.js";
import Image from "./fabric-components/Image.js";
import Text from "./fabric-components/Text.js";

export default class CanvasBox extends React.Component {
  constructor() {
    super();
  }
  componentDidMount(){
    var c = new Canvas({
      width:600,
      height:400,
      id:'canvas'
    });
    c.init();
    c.centerCanvas();
    
    var image = new Image({
      src:'media/image.png'
    });
    image.create();
    // var image = new Image({
    //   src:'media/Placeholder.jpg',
    // });
    // image.create();

    // var tempText = new Text();
    // tempText.create();
  }

  render() {
    return (
      <div class="canvas-box">
        <div class="section no-pad-bot no-pad-top">
          <canvas id = "canvas"></canvas>
        </div>
        <Toolbox />
      </div>
    );
  }
}