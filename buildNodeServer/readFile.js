import { fileURLToPath} from "node:url";
import { dirname,join} from "node:path";
import { readFile } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const fileRead = async(path) =>{

    try {
        
        const data = await readFile(join(path))
            return data;
    } catch (error) {
        console.log(`<h1>error: ${error}</h1>`)
    }
};