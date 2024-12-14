function time(ms){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve();
        },ms)
    })
}

function foodDelivery(){
    time(2000).then(()=>{
            console.log("log in");
        return time(2000);
    }).then(()=>{
            console.log("Success..!");
        return time(2000);
    }).then(()=>{
            console.log("finding food");
        return time(2000);
    }).then(()=>{
        
            console.log("ordering food");
        return time(2000);
    }).then(()=>{
        
            console.log("deliveryng");
        return time(2000);
    }).catch((err)=>{
        console.error(err);
    }).finally(()=>{
        console.log("All done");
    })
}
foodDelivery();