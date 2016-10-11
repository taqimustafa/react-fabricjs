import React from "react";
import ReactDOM from "react-dom";

var that;
export default class Shape extends React.Component {
  constructor() {
    super();
    this.state = {
      shapeJSON:[
        {
          
        }
      ]
    };
    that = this;
  }
  addShape(event){
    var object = JSON.parse(event.target.dataset.attr);
  }
  render() {
    var currentClass = "col-md-12 addShape "+this.props.visibility;
    return (
      <div class={currentClass}>
        Shapes
      </div>
    );
  }
}