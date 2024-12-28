import {readFileSync} from "node:fs"
import { fileURLToPath } from "url";
import { dirname,join } from "path";
import {parentPort} from "node:worker_threads"


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname (__filename);

const data = readFileSync(join(__dirname,'test.txt'));
       
parentPort.postMessage('hello world..!');