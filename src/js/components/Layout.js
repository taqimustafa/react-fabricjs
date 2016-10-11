import React from "react";

import LayoutCSS from "./Layout.css";

import Header from "./Header/Header.js";
import Sidebar from "./Sidebar/Sidebar.js";
import CanvasBox from "./CanvasBox/CanvasBox.js";

export default class Layout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="full-width">
        <Header/>
        <div class="wrapper">
          <Sidebar/>
          <CanvasBox/>
        </div>
      </div>
    );
  }
}