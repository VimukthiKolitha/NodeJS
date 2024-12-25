
//this buffer ajust acoding to string size
const data1 = Buffer.from("vimukthi");
console.log(data1.toString());


//this buffer carry only 10 bytes
const data = Buffer.alloc(10);

data.write("vimukthi kolitha");

console.log(data.toString());
