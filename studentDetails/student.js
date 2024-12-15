//install inquirer
import inquirer from "inquirer";
import {log} from "console";
import { gen } from "./cardGen.js";
import { writeFile } from "fs/promises";

async function student() {
  let a = true;
  let alldata = [];
  let cos = '';

  //getting user details
while(a)
{
    try {
      const data = await inquirer.prompt([
        {
          type:'input',
          name:'stname',
          message:'Enter name:',
        },
        {
          type:'input',
          name:'id',
          message:'Enter ID:',
        },
        {
          type:'input',
          name:'grade',
          message:'Enter grade:',
        },
        {
          type:'checkbox',
          name:'lang',
          choices:['java','python','C','C++'],
          message:'choose programing languege:'
        },
        {
          type:'confirm',
          name:'conf',
          message:'Do you have other data:',
        },
     ]);

     //data push to array (alldata)
     alldata.push(data);

     //break point 
     if(!data.conf)
      {
       a = false;
      }
    } catch (error) {
      log(err);
    }
 }
 //data send to cardgen function
   alldata.forEach(({stname,grade,id,lang})=>{
   cos += gen(stname,grade,id,lang);
   });

   log(cos);
   
   //send html card to student.html using write file method 
   try {

    const htmlpart = `
   <!DOCTYPE html>
   <html>
   <head>
      <link href="./student.css" rel="stylesheet">
      <title>Student Details</title>
   </head>
   <body>
      ${cos}
   </body>   
</html>`

    writeFile("student.html",htmlpart);
    
   } catch (error) {
     log(error);
   }
}
student();