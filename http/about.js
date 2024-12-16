
//about page  (type url as a http://localhost:4000/about)
export const  aboutPage = (url,res)  => {
    
    if(url == '/about')
    {
        res.write("thi is about page");
        res.end();
    }
}