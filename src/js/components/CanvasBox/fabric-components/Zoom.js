require('fabric');
var $ = require('jquery');
import FabricStore from "../../../stores/FabricStore.js";
class Fabric_Zoom{
	constructor(object){
		this.canvas 		= FabricStore.getCanvas();
		this.currentZoom 	= 100;
		this.maxZoom 		= (object && typeof object.maxZoom != "undefined") ? object.maxZoom : 200;
		this.minZoom 		= (object && typeof object.minZoom != "undefined") ? object.minZoom : 10;
		this.zoomStep 		= (object && typeof object.zoomStep != "undefined") ? object.zoomStep : 10;
	}
	zoomIn(){
		if((this.currentZoom + this.zoomStep) <= this.maxZoom){
			if(this.canvas == null){
				this.canvas = FabricStore.getCanvas();
			}
			this.canvas.discardActiveObject();
			this.calculateObjectOriginalPosition();
			this.currentZoom = this.currentZoom + this.zoomStep;
			this.calculateObjectUpdatedPosition();
			this.setCanvasSize();
			this.centerCanvas();
			this.updateOverlay();
			this.canvas.renderAll();
			window.open(this.canvas.toDataURL(),'_blank');
		}
	}
	zoomOut(){
		if((this.currentZoom - this.zoomStep) >= this.minZoom){
			if(this.canvas == null){
				this.canvas = FabricStore.getCanvas();
			}
			this.canvas.discardActiveObject();
			this.calculateObjectOriginalPosition();
			this.currentZoom = this.currentZoom - this.zoomStep;
			this.calculateObjectUpdatedPosition();
			this.setCanvasSize();
			this.centerCanvas();
			this.updateOverlay();
			this.canvas.renderAll();
		}
	}
	calculateObjectOriginalPosition(){
		var that = this;
		this.canvas.forEachObject(function(object){
			object.set({
				originalLeft:object.left/(that.currentZoom/100),
				originalTop:object.top/(that.currentZoom/100),
				originalScaleX:object.scaleX/(that.currentZoom/100),
				originalScaleY:object.scaleY/(that.currentZoom/100),
			});
		});
	}
	calculateObjectUpdatedPosition(){
		var that = this;
		this.canvas.forEachObject(function(object){
			object.set({
				left:object.originalLeft*(that.currentZoom/100),
				top:object.originalTop*(that.currentZoom/100),
				scaleX:object.originalScaleX*(that.currentZoom/100),
				scaleY:object.originalScaleY*(that.currentZoom/100),
			});
			object.setCoords();
		});
	}
	updateOverlay(){
		var that = this;
		this.canvas.setOverlayImage(that.canvas.overlayImage,that.canvas.renderAll.bind(that.canvas), {
	        width:that.canvas.width,
	        height:that.canvas.height
		});
		this.canvas.renderAll();
	}
	setCanvasSize(){
		this.canvas.setWidth(this.canvas.originalWidth * (this.currentZoom/100));
		this.canvas.setHeight(this.canvas.originalHeight * (this.currentZoom/100));
		this.canvas.calcOffset();
	}
	centerCanvas(){
		if($('#canvas').width() < $('.canvas-box').width()){
		  	$('#canvas').closest('div.section').css({
		  		'margin-top':Math.abs(($('.canvas-box').height()-this.canvas.height)/2),
		  		'margin-left':Math.abs(($('.canvas-box').width()-this.canvas.width)/2)
		  	});
		}
	}
};
module.exports = Fabric_Zoom;