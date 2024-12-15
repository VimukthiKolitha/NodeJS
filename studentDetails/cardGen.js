//pass data to card
export const  gen = (stname,grade,id,lang = []) => {
  let sub = '';

  lang?.forEach((element) => {
    sub = `<p>${element}</p>`;
  });
  return `<div class="card">
         <div class="main">
            <h1>Student details</h1> 
            <h3>Name:${stname}</h3>
            <h3>Grade:${grade}</h3>
            <h3>ID:${id}</h3>
            <h3>coding:${sub}</h3>
          </div>
       </div>
   </body>`;
}