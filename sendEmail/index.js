import 'dotenv/config';
import { log } from 'node:console';
import { createTransport } from 'nodemailer';
import { readFileSync} from 'node:fs';

//instals node i dotenv  and node i nodemailer
// sensitive values are stored in .env file

// read html file  
//sending html output
const outpiut  = readFileSync('./index.html','utf-8');



const mailServer = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

//if you wanna send html part use 'html:' 
//if you wanna send text use 'text' insted of 'html'
mailServer.sendMail({from:process.env.FROM_EMAIL,to:process.env.TO_EMAIL,subject:'hello',html:outpiut},(err,info) =>{
    if(err)
    {
        log('Email can not send.',`${err}`);
    }
    else{
        log('email sent');
    }

});