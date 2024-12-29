import {worker} from "workerpool";
import {join} from "node:fs";
import {readFileSync} from "node:fs";
import {__dirname} from ".";//"." means its comming from index


const  htmlRead = (filename) =>{

    const data = readFileSync(join,(__dirname,filename));
    return data;
};

worker({
    //html = worker name
    html:htmlRead,
});