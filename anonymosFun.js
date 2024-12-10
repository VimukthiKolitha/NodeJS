const myfun = (num1,callback)=>{

    const a = num1 * num1;
    const b = num1 + num1;

    callback(a,b);
};

//anonymos function
//insted of adding input to num2 it is turn in to function 
myfun(4,(a,b)=>{

    console.log("num 1 is :",a);
    console.log("num 2 is :",b);
});