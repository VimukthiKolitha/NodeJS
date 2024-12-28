//Worker Threads in Node.js are a great tool for offloading CPU-intensive or large computational tasks from the main thread


//using clusters in Node.js can significantly reduce the time impact on other activities by taking full advantage of multi-core processors.
import { createServer } from "http";
import { log } from "console";
import { fileURLToPath } from "url";
import { dirname,join } from "path";
import process from "node:process";
import {isMainThread,Worker} from "node:worker_threads"



  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname (__filename);

  const file = new Promise((resolve,reject)=>{
     const worker = new Worker(join(__dirname,'new-thread.js'));

     worker.on('message',(msg) =>{
        resolve(msg);
     });
     worker.on('error',(err) =>{
        reject(err);
     });
     worker.on('exit',(code) =>{
        if(code != 0)
            reject(new Error(`worker stoped ${code}`));
     });
  })

  createServer((req,res) =>{

    if(req.url === '/')
    {
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('hellow');

    }else if(req.url === '/data'){

        res.writeHead(200,{'content-type':'text/plain'});
        file.then((data) =>{
            res.end(data);
        }).catch((err) =>{
            res.end(err);
        })
       
    }

}).listen(4000,()=>{
    log('running...!');
    log(`primary ${process.pid} is running`);
});
