import {EventEmitter} from "events";

class FabricStore extends EventEmitter{
	constructor(){
		super();
		this.canvas = null;
	}
	getCanvas(){
		return this.canvas;
	}
	setCanvas(canvas){
		this.canvas = canvas;
	}
}

const fabricStore = new FabricStore;
export default fabricStore;