
import inquirer from "inquirer";
import {log} from "node:console";


//inquirer (to get user input) to use instaall it (npm i inquirer)
inquirer.prompt([
    {
        type:'input',
        name:'Your name is',
        message:'Enter your name'

    },
]).then((data) => log(data))
  .catch((err) => log(err));

inquirer.prompt([
    {
        type:'list',
        name:'name',
        message:'choose name:',
        choices:['nimal','amal','kamal']
    },
]).then((data)=>log(data))
  .catch((err)=>log(err));