
import {createServer} from "node:http";
import { log } from "node:console";
import {dirname,join} from "node:path";
import {pool} from "workerpool";
//install worker pool(npm i workerpool)

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//worker pool instent
pool(join,(__dirname,'./file-read-worker.js'));
createServer((req,res) =>{

   if(req.url === '/')
   {
    res.writeHead(200,{'content-type':'text/html'});
    fileReadPool.exec('html',['index.html']);
    then((result) =>{
        res.end(result);
    }).catch((err)=>{
        log(err);
    }).then(()=>{
        pool.terminate()  //terminate all workers when done
    })
    
   }

     
}).listen(4000,() =>{
    log('running....!');
})