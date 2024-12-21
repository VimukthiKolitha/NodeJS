import {EventEmitter} from "node:events";
import { log } from "console";

class JsEmitter extends EventEmitter{}

const emiter = new JsEmitter();

const myFinctioin = () =>{
    log('this is remove functin');
};

//add listner
emiter.on('vimukthi',myFinctioin);

//run these two only
emiter.emit('vimukthi');
emiter.emit('vimukthi');

//reamove listner
emiter.removeListener('vimukthi',myFinctioin);

//these are not running 
emiter.emit('vimukthi');
emiter.emit('vimukthi');