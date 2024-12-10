import { dirname,join } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import { writeFile } from "fs/promises";
import { log } from "console";
import { encode } from "querystring";

const  __filename = fileURLToPath(import.meta.url);
const __dirname = dirname (__filename);


//promice API
// readFile(join(__dirname,"myname.txt"),{
//     encoding:"utf-8"
// }).then((data)=> log(data))
//   .catch((err)=>log(err));

//   const write = async(data)=>{    
//   }

  const writeFun = async (data) =>{
    try{
          await writeFile(join(__dirname,"promiceWrite.js"),data,{
            encoding:"utf-8",
          });

          log("correct");
       }catch (err){
        log(err);
       }
  };
  

  writeFun(
    `const num1 = 10;
     const num2 = 9;

     const sum = num1 + num 2;

     console.log(sum);
    `
  );
 