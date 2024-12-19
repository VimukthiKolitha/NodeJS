
import { log } from "node:console";
import { createServer } from "node:http";
import { server } from "./serverControl.js";



    //profetional way to declere port
    const PORT = process.env.PORT || 4000;

createServer((req,res,err) =>{
  
    if(err)
    {
        log(err);
    }

     server(req,res);

}).listen(PORT,() =>{

    log(`server running on:${PORT}`);

});