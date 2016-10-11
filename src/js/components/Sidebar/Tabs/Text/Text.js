import React from "react";
import ReactDOM from "react-dom";

import Fabric_Text from "../../../CanvasBox/fabric-components/Text.js";

var that;
export default class Text extends React.Component {
  constructor() {
    super();
    this.state = {
      textJSON:[
        {
          id:1,
          fontFamily:'Roboto Condensed',
          fill:'#999999',
          fontSize:36,
          fontWeight:800,
          text:'HEADLINE 1'
        },
        {
          id:2,
          fontFamily:'Roboto Condensed',
          fill:'#999999',
          fontSize:30,
          fontWeight:800,
          text:'HEADLINE 2'
        },
        {
          id:3,
          fontFamily:'Roboto Condensed',
          fill:'#999999',
          fontSize:24,
          fontWeight:800,
          text:'HEADLINE 3'
        },
        {
          id:4,
          fontFamily:'Roboto Condensed',
          fill:'#999999',
          fontSize:18,
          fontWeight:800,
          text:'HEADLINE 4'
        },
        {
          id:5,
          fontFamily:'Roboto Condensed',
          fill:'#999999',
          fontSize:14,
          fontWeight:300,
          width:200,
          text:'Maecenas at urna luctus, pharetra augue nec, sollicitudin lectus. Duis sagittis egestas nisl pellentesque semper. In hac habitasse platea dictumst.'
        }
      ]
    };
    that = this;
  }
  addText(event){
    var object = JSON.parse(event.target.dataset.attr);
    var tempText = new Fabric_Text({
      fill:object.fill,
      text:object.text,
      fontSize:object.fontSize,
      fontWeight:object.fontWeight,
      fontFamily:object.fontFamily,
      width:object.width
    });
    tempText.create();
  }
  render() {
    var currentClass = "col-md-12 addText "+this.props.visibility;
    return (
      <div class={currentClass}>
        {
          this.state.textJSON.map(function (object,index) {
            var textStyle = {
              fontSize:object.fontSize+"px",
              fontWeight:object.fontWeight,
              fontFamily:object.fontFamily,
              color:object.fill
            }
            return(
              <div class="col-md-12" key={index}>
                <div class="heading-color pointer" data-attr={JSON.stringify(object)} onClick={that.addText.bind(this)} style={textStyle}>{object.text}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}