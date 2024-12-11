//promice 
const mypromise = new Promise((data,err)=>{
   
    //set time to 2 sec
    setTimeout(()=>{
       err("resolve after 2 sec");

    },2000);

})
//display data
mypromise.then((data) =>{
   console.log("you are correct");
})
//display errors
.catch((err) =>{
    console.log("wrong");
})