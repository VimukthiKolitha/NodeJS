//when enter a random number if it's grater than 1.5 resolve it and if its les than 1.5 reject it

const fun = new Promise((resolve,reject) =>{

    const num = 2;//enter number here
    
      if(num > 1.5)
      {
         setTimeout(()=>{
            resolve("wait 2 sec");
         },2000);
      }
      else{
        setTimeout(()=>{
            reject("wait 2 sec");
         },2000);
      }
})
fun.then((res)=>{
     console.log("enterd number greater than 1.5");
}).catch((err)=>{
    console.log("enterd number less than 1.5");
})
