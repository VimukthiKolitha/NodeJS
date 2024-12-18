import { createServer } from "node:http";
import {log} from "console";
import { copyFile,rm,existsSync,mkdir } from "node:fs";
import { IncomingForm } from "formidable";


//type of reaquests
//GET = retrive data from end ponit
//POST = CREATE NEW 
//PUT = update
//DELETE = delete data

createServer((req,res) =>{

    if(req.method === 'POST')
    {
       const userdata = new IncomingForm();
        userdata.parse(req,(err,fields,files) =>{
          
            if(err)
            {
                const prob = `
                <!DOCTYPE html>

          <html>
             <head>
                <title>document</title>
              </head>
               <body>
                 <h>Upoad your document</h>
                  <form action="/" method="post" enctype="multipart/form-data">
                   <h>data sent fail...!</h>
                </form>
                <a href="/"></a>
               <button>Home</button>
               </body>
            </html>`;

               res.write(prob);
               res.end();
            }
            else{
                if(!existsSync('fileUpload/uploadFiles'))
                {
                    mkdir('fileUpload/uploadFiles',(err) =>{
                       if(err)
                       {
                        log('can not create folder')
                       }
                       else{
                        log('file created');
                       }
                    });
                }else{
                    log('user field',fields);
                    log('user files:',files.file[0].originalFilename);
    
                    const oldpath = files.file[0].filepath;
                    const newpath  = `fileUpload/uploadFiles/${files.file[0].originalFilename}`;
                     
                    copyFile(oldpath,newpath,(err) =>{
                        if(err)
                        {
                            log("cant copy file");
                        }
                        else{
                            log("file copy success");
                        }
                    });

                    rm(oldpath,(err) =>{
                        if(err)
                        {
                            log("cant delete file:",err);
                        }
                        else{
                            log("file delete success");
                        }
                    })
                }
                const okey = `
                <!DOCTYPE html>
            <html> 
               <head>
                   <title>document</title>
               </head>
                <body>
                    <form action="/" method="post" enctype="multipart/form-data">
                    <h>data sent success...!</h>
                </form>
                   <a href="/"></a>
                      <button>Home</button>
                 </body>
            </html> `;

          res.write(okey);
          res.end();


            }
        });
    }
    else if(req.method === 'GET')
    {
          const html = `
          <!DOCTYPE html>
           <html>
             <head>
                 <title>Document Upload</title>
             </head>
             <body>
                <form action="/" enctype="multipart/form-data" method="post">
                <h>add Details</h>
                <input type="text" name="name" placeholder="Enter name:">
                <input type="file" name="file">
                <button type="submit" name="submit" >Submit</button>
              </form>
            </body>
          </html>`;

          res.write(html);
          res.end();
    }
    else
    {
       const problem = `
       <!DOCTYPE html>

        <html>
           <head>
              <title>document</title>
           </head>
            <body>
           <form action="/" method="post" enctype="multipart/form-data">
            <h>cant load</h>
            </form>
            <a href="/"></a>
             <button>Home</button>
           </body>
        </html>`;
      res.write(problem);
      res.end();

      log(err);
    }
}).listen(4000,() =>{
    log('server started');
});