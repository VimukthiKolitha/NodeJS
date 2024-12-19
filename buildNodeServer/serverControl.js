
export const server = (req,res) =>{
    if(req.url === '/' && req.method === 'GET')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`<h1>Hi vimukthi</h1>`);
    }
};