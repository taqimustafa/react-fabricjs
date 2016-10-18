import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class FabricStore extends EventEmitter{
	constructor(){
		super();
		this.canvas = null;
		this.activeObject = null;
	}
	getCanvas(){
		return this.canvas;
	}
	setCanvas(canvas){
		this.canvas = canvas;
	}
	getActiveObject(){
		return this.activeObject;
	}
	setActiveObject(object){
		console.log('store updated');
		this.activeObject = object;
		this.emit('change');
	}
	handleActions(action){
		switch(action.type){
			case "updateActiveObject":{
				console.log('active object updated',action.object.class);
				this.setActiveObject(action.object.class);
				break;
			}
			case "setCanvas":{
				console.log('canvas updated',action);
				this.setCanvas(action.object);
				break;
			}
		}
	}
}

const fabricStore = new FabricStore;
dispatcher.register(fabricStore.handleActions.bind(fabricStore));

export default fabricStore;