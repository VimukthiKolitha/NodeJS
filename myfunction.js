const math = (num1,num2,num3 = 0,num4 = 1)=>
{
   let a = num1 + num2 * 2;

   if(num3)
   {
     a = a + num3 - 5;
   }
   else
   {
     a = a *  num4;
   }

   return a;
};

console.log(math(12,12))

export default math; // math

//another way to export
//export math; = {math}

const main = 
{
  abc,
  jhk,
  kkk,
};

export {main};
export{abc,jhk,kkk};
