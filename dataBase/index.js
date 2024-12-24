//crating data base connection 

import {createConnection} from "mysql2";
import {log} from 'node:console';

//using xampp

//create connection
const db = createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'student'
});

//check DB connect or not
db.connect((err) =>{
    if(err)
    {
       log('error DB not connect'); 
    }else{

        log('connected');

        //write query
        const SQLquery ="SELECT * FROM `students`";

        //run query
        db.query(SQLquery,(err,data)=>{
            if(err)
            {
                log('error:',err);
            }else{
                log(data);
            }
        });

    }
});
