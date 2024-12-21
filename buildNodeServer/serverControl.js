import { fileRead } from "./readFile.js";
import {exten} from "./extwntionType.js"
import {log} from "console";

export const server = (req,res) =>{

    if(req.url === '/favicon.ico')
    {
        return ;
    }
    if(req.url === '/' && req.method === 'GET')
    {
        fileRead('./index.html',res,'text/html');
    }
   else if(req.method == 'GET'){
     const extention = String (req.url).split(".");
     fileRead(
        `${req.url}`,
        res,
        exten(extention[extention.length - 1])
     );

     log('amila =>' , exten(extention[extention.length - 1]))
   }
};