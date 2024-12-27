import {log} from "console";
import {createServer} from "node:http";
import {fileURLToPath} from "node:url";
import {dirname,join} from "node:path";
import {readFileSync} from "node:fs";

//without using cluster main thread bloack afect to other activitys (can see in "inspect element" and go to "network" section and watch time deiffernt to execute)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

createServer((req,res) =>{
if(req.url === "/")
    {
        res.writeHead(200,{'content-type':'text/plain'});
        res.write('hiiii');
        res.end(); 
    }else if(req.url === '/data')
        {
            res.writeHead(200,{'content-type':'text/plain'});

            //in here we using sync to stop main thread
            const data = readFileSync(join(__dirname,'test.txt'))
            res.end(data);
        }     

}).listen(4000,()=>{
    log('server running');
})
