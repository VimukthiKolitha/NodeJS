import { appendFile } from "fs";

import {dirname,join} from "path";
import { fileURLToPath } from "url";
import {rm} from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// appendFile(join(__dirname,"generated.js"),
// `
//  const a = 2 + 2
//   console.log(a)
// `
// ,(err)=>{
//   if(err)
//   {
//     console.log(err);
//   }
// });

//remove file

rm(join(__dirname,"bla.txt"),(err)=> !err && log("file deleted"));
   