import React from "react";
import ReactDOM from "react-dom";

import ImageCSS from "./Image.css";
import Fabric_Image from "../../../CanvasBox/fabric-components/Image.js";

var that;
export default class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      ImageJSON:[
        'media/image.png',
        'media/Placeholder.jpg',
      ]
    };
    that = this;
  }
  addImage(event){
    var object = event.target.dataset.src;
    var image = new Fabric_Image({
      src:event.target.dataset.src,
    });
    image.create();
  }
  render() {
    var currentClass = "col-md-12 image-container "+this.props.visibility;
    return (
      <div class={currentClass}>
        {
          this.state.ImageJSON.map(function (backgroundImage,index) {
            var imageStyle = {
              backgroundImage:'url('+backgroundImage+')'
            }
            return(
              <div onClick={that.addImage.bind(this)} key={index} data-src={backgroundImage} class="image-container-content col-md-12" style={imageStyle}></div>
            );
          })
        }
      </div>
    );
  }
}