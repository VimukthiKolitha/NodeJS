import { fileRead } from "./readFile.js";

export const server = (req,res) =>{
    if(req.url === '/' && req.method === 'GET')
    {
        fileRead('./index.html',res,'text/html');
    }
    if(req.url === '/index.css' && req.method === 'GET')
    {
       fileRead('./index.css',res,'text/css');
    }
};