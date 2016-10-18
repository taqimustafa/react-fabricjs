import dispatcher from "../dispatcher";

export function setActiveObject(object){
	console.log('Dispatcher Called');
	dispatcher.dispatch({
		type:"updateActiveObject",
		object:object
	})
}

export function setCanvas(object){
	console.log('Dispatcher Called');
	dispatcher.dispatch({
		type:"setCanvas",
		object:object
	})
}