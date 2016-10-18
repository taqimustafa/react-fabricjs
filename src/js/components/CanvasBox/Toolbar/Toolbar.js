import React from "react";

import ToolbarCSS from "./Toolbar.css";
import Text from "./Text/Text.js";
import Image from "./Image/Image.js";

export default class Toolbar extends React.Component {
  constructor() {
    super();
    this.state
  }
  render() {
    var toolbarContent;
    if (this.props.activeObject == null) {
      toolbarContent = "Home";
    } 
    else if(this.props.activeObject == 'image'){
      toolbarContent = <Image />;
    }
    else if(this.props.activeObject == 'text'){
      toolbarContent = <Text />;
    }

    return (
      <div class="canvas-toolbar">
        {toolbarContent}
      </div>
    );
  }
}