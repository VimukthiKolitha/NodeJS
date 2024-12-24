import {readFile} from "node:fs";

console.log('vimukthi 1');
console.log('vimukthi 2');


setTimeout(()=>{
    console.log('timer 1');
},3)
console.log('vimukthi 4');

//high priority
const a = new Promise((data,err) =>{
    data("promise");
})
a.then((data) =>{
    console.log(data);
})

console.log('vimukthi 5');


//low priority
readFile('./hey.txt',(data,err)=>{
    if(err)
    {
     console.log(err);
    }else{
        console.log(data.toString());
    }
});

console.log('vimukthi 6');

setTimeout(()=>{
    console.log('timer 2');
},3)

console.log('vimukthi 8');
