//getting input from student

import inquirer from "inquirer";
import { log }  from "console";

async function student() {
    let a = true;

while(a)
{
   
        try
        {
           const data = await inquirer.prompt([
                {
                    type:'input',
                    name:'yourName',
                    message:'Enter name',
                },
                  {
                    type:'input',
                    name:'yorAge',
                    message:'Enter age'
                  },
                  {
                     type:'confirm',
                     name:'check',
                     message:'Do you have other data',
                  },
             ]) ;
             log(data); 

             if(!data.check)
             {
                a = false;
             }
        }catch(err)
        {
          log(err);
        }
    }
}              

student();