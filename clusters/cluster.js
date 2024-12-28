
//using clusters in Node.js can significantly reduce the time impact on other activities by taking full advantage of multi-core processors.
import { createServer } from "http";
import { log } from "console";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname,join } from "path";
import { cpus } from "os";
import cluster  from "node:cluster";
import process from "node:process"


  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname (__filename);


  if(cluster.isPrimary)
  {
   
    //fork means copy of work
    //i am share copy with 2 forks
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();

    //cluster exit
    cluster.on('exit',(Worker,code,signal) =>{
        log(`worker ${Worker.process.pid}died`);
    });

  }else{

    //in this else part i am assing below work to those 2 proccesors
    createServer((req,res) =>{

        if(req.url === '/')
        {
            res.writeHead(200,{'content-type':'text/plain'});
            res.end('hellow');
    
          //checking how many cores i have
            log(cpus());
            log(cpus().length)
    
        }else if(req.url === '/data'){
    
            res.writeHead(200,{'content-type':'text/plain'});
            const data = readFileSync(join(__dirname,'test.txt'));
            res.end(data);
        }
    
    }).listen(4000,()=>{
        log('running...!');
        log(`primary ${process.pid} is running`);
    });
  }
