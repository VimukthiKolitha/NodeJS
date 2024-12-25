//without stream 
//this took large size of memory to load 

import { readFile } from 'node:fs';
import {createServer} from 'node:http';


createServer((req,res) =>{
  
    res.writeHead(200,'Content-type:video/mp4');
    
    readFile('./video.mp4',(err,data) =>{
        if(err)
        {
           console.error(err);
        }
        else{
            res.end(data);
        }
});

}).listen(3000,() =>{
    console.log("server running")
});