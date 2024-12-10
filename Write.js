import { log } from "console";
import { writeFile } from "fs";
import {dirname,join} from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

writeFile(join(__dirname,"write.txt"),"Hi my name vimukthi kolitha",(err)=>{
    if(err)
    {
        log(err);
    }
});