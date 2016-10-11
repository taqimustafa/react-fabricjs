require('fabric');
var $ = require('jquery');
import FabricStore from "../../../stores/FabricStore.js";
class Fabric_Canvas{
	constructor(object){
		this.width = (object && typeof object.width != "undefined") ? object.width : 400;
		this.height = (object && typeof object.height != "undefined") ? object.height : 400;
		this.id = (object && typeof object.id != "undefined") ? object.id :'canvas';
		this.canvas = null;
		this.backgroundColor = (object && typeof object.backgroundColor != "undefined") ? object.backgroundColor :'#ffffff'; 
	}
	init(){
	  	fabric.Object.prototype.set({
			cornerStyle:"circle",
			cornerColor:"#ffffff",
			borderColor:"#999999",
			cornerStrokeColor:"#999999",
			borderDashArray:[3,2],
			transparentCorners:!1,
			moveCursor:"pointer"
		});
		this.canvas = new fabric.Canvas(this.id);
		this.canvas.setBackgroundColor(this.backgroundColor);
		this.canvas.setWidth(this.width);
      	this.canvas.setHeight(this.height);
      	FabricStore.setCanvas(this.canvas);
	}
	centerCanvas(){
	  	$('#'+this.id).closest('div.section').css({
	  		'margin-top':Math.abs(($('.canvas-box').height()-this.canvas.height)/2),
	  		'margin-left':Math.abs(($('.canvas-box').width()-this.canvas.width)/2)
	  	});
	}
};
module.exports = Fabric_Canvas;