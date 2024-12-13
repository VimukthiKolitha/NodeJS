
//this is not a good practice
setTimeout(()=>{
   
    console.log("Login");
   setTimeout(()=>{
     console.log("Success..!");
     setTimeout(()=>{
        console.log("finding food");
        setTimeout(()=>{
            console.log("ordering food");
            setTimeout(()=>{
                console.log("deliveryng");
            },1000)
        },1000)
     })
   },1000)
},1000)