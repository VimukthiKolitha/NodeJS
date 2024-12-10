import {dirname,join} from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs";

const __filename =  fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//call back api
readFile(join(__dirname,"myname.txt"),(err,data)=>{

    if(err)
    {
        console.log(err);
    }    
    console.log(data.toString());
})


