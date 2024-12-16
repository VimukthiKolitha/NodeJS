
//old method
//const hello = "1223392";
//const os = require("os");

//console.log(hello);

//console.log(os.platform());
//console.log(os.version());

//console.log(__dirname);


//method
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);



