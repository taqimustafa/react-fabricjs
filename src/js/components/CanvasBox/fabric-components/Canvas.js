require('fabric');
var $ = require('jquery');
import * as FabricActions from "../../../actions/FabricActions.js";
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
		var that = this;
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
		this.canvas.controlsAboveOverlay = true; 
		this.canvas.setBackgroundColor(this.backgroundColor);
		this.canvas.setWidth(this.width);
      	this.canvas.setHeight(this.height);
      	FabricActions.setCanvas(this.canvas);

      	this.canvas.on('object:selected',function(object){
      		FabricActions.setActiveObject(object.target);
      	});

		this.canvas.originalWidth = this.width;
		this.canvas.originalHeight = this.height;
	}
	addTshirtOverlay(src){
		var that = this;
		var testimage = new Image();
		const color = '#333333';

	    testimage.onload = function() {
			var shirtimage = new fabric.Image(testimage, {originX: 'left', originY: 'top'});
			shirtimage.top = 0;
			shirtimage.left = 0;
			shirtimage.scaleX = 1;
			shirtimage.scaleY = 1;
			shirtimage.setCoords();
			
			var borderCanvas = window._tmpCanvas = new fabric.Canvas(fabric.util.createCanvasElement());
			borderCanvas.setWidth(shirtimage.width);
			borderCanvas.setHeight(shirtimage.height);

			that.canvas.setWidth(shirtimage.width);
			that.canvas.setHeight(shirtimage.height);
			that.canvas.originalWidth = shirtimage.width;
			that.canvas.originalHeight = shirtimage.height;
			that.canvas.overlayImage = src;

			const rect = {
				width:200,
				height:300,
				left:(that.canvas.width/2)-100,
				top:100,
			};

			var rect1 = new fabric.Rect({width:shirtimage.width,height:rect.top,left:0,top:0,fill:color,stroke:null});
			var rect2 = new fabric.Rect({width:rect.left,height:shirtimage.height,left:0,top:0,fill:color,stroke:null});
			var rect3 = new fabric.Rect({width:shirtimage.width,height:shirtimage.height,left:0,top:(rect.top+rect.height),fill:color,stroke:null});
			var rect4 = new fabric.Rect({width:shirtimage.width,height:shirtimage.height,left:(rect.left+rect.width),top:0,fill:color,stroke:null});
			
			borderCanvas.add(rect1);
			borderCanvas.add(rect2);
			borderCanvas.add(rect3);
			borderCanvas.add(rect4);
			borderCanvas.add(shirtimage);
			borderCanvas.renderAll();
			that.canvas.setBackgroundColor(color);
			that.canvas.setOverlayImage(borderCanvas.toDataURL(),that.canvas.renderAll.bind(that.canvas));
	    }
	    testimage.src = src;
	}
	centerCanvas(){
	  	$('#'+this.id).closest('div.section').css({
	  		'margin-top':Math.abs(($('.canvas-box').height()-this.canvas.height)/2),
	  		'margin-left':Math.abs(($('.canvas-box').width()-this.canvas.width)/2)
	  	});
	  	console.log('centered called',this.id);
	}
};
module.exports = Fabric_Canvas;
