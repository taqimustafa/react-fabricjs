import React from "react";

import Tabs from "./Tabs/Tabs.js"

import SidebarCSS from "./Sidebar.css";
import Sprite from '../../../media/sprite.png';

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      activeClass:"text"
    }
  }
  updateState(event){
    this.setState({
      activeClass:event.target.dataset.type
    });
  }
  render() {
    const spriteBackground = {
      backgroundImage:'url(src/'+Sprite+')'
    };
    return (
      <div class="sidebar-container hidden-sm">
        <div class="sidebar-menu">
          <div class="menu-icons">
            <section id="sidebar"> 
              <ul>
                <li>
                  <div onClick={this.updateState.bind(this)} data-type="text" class="full-width">
                    <a class="icon icon-text" style={spriteBackground} data-type="text"></a> 
                    <a data-type="text">TEXT</a> 
                  </div>
                </li>
                <li>
                  <div onClick={this.updateState.bind(this)} data-type="image" class="full-width">
                    <a class="icon icon-image" style={spriteBackground} data-type="image"></a>
                    <a data-type="image">IMAGE</a>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <div class="menu-right-container">
            <Tabs activeClass = {this.state.activeClass}/>
          </div>
        </div>
      </div>
    );
  }
}