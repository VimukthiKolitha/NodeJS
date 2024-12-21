import {log} from "node:console";
import {EventEmitter } from "node:events";


class VkEmitter extends EventEmitter{}

const emiterObj = new VkEmitter();

//these function run as order it is called as register order

emiterObj.on("vimukthi",() =>{
    log('Hello world..!');
});

//there is  no problem you can create several funtion with same name
emiterObj.on("vimukthi",() =>{
    log('Sri lanka');
});

emiterObj.on("vimukthi",(para) =>{
    log('Sri lanka',`${para}`);
});


emiterObj.emit("vimukthi");
emiterObj.emit("vimukthi");
emiterObj.emit("vimukthi");
//send parameter as 'ayubowan'
emiterObj.emit("vimukthi",'ayubowan');


//if we need to run event only onece  use 'onece' insted of 'on'

emiterObj.once("game",() =>{
    log("only onece");
});

emiterObj.emit('game');
//if we run more than onece it not running and you not get an error
emiterObj.emit('game');
emiterObj.emit('game');