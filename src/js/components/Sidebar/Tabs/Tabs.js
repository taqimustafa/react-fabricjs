import React from "react";
import ReactDOM from "react-dom";

import Text from "./Text/Text.js"
import Image from "./Image/Image.js"
import Shape from "./Shape/Shape.js"

export default class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      text:'hidden',
      image:'hidden',
      shape:'hidden'
    }
  }
  updateState(){
    for (var i = 0; i < Object.keys(this.state).length; i++) {
      if(Object.keys(this.state)[i] == this.props.activeClass){
        this.state[Object.keys(this.state)[i]] = 'active';
      }
      else{
        this.state[Object.keys(this.state)[i]] = 'hidden';
      }
    }
  }
  render() {
    this.updateState();
    return (
      <div class="full-width">
        <div class="right-menu-container-heading col-md-12"><span>{this.props.activeClass}</span></div>
        <div data-id={this.state.text} class="right-menu-container full-height full-width">
          <div class="custom-scroll full-width">
              <Text visibility={this.state.text}/>
              <Image visibility={this.state.image}/>
              <Shape visibility={this.state.shape}/>
          </div>
        </div>
      </div>
    );
  }
}