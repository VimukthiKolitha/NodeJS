 //run (http://localhost:4000)
import { createServer} from 'node:http';
import { aboutPage } from './about.js';

//creating server
createServer((req,res) =>{

    console.log(req.url);
     res.write('Hi vimukthi kolitha');
     //call about page
     aboutPage(req.url,res);
     res.end();
}).listen(4000,() =>{
    console.log("server running");
})