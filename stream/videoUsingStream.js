import {createReadStream,readFile} from "node:fs";
import {createServer} from "node:http";
import {log} from "console";



//very low memory usage 
const read  = createReadStream('./video.mp4');
createServer((req,res) =>{

    res.writeHead(200,{'content-type':'video/mp4'});
    read.pipe(res);

}).listen(4000,() =>{
    log("server running..");
})