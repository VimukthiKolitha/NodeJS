
//larage file breake in to small parts and send to the destination and rebuild it
//because larger files are hard to send 

import {createReadStream,createWriteStream,read,readFile, ReadStream, WriteStream} from "node:fs";
import {log} from "console";



//data break in to 24 bytes parts
const haha = createReadStream('./test.txt',{
    highWaterMark:24
});


//chunk = part (24 bytes)
haha.on("data",(chunk) =>{

    log(chunk.toString());
})
const copy = createWriteStream('./copy.txt');

//pipe is safe and fast way to copy large file
haha.pipe(copy);