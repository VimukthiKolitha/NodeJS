import { fileURLToPath} from "node:url";
import { dirname,join} from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const server = (req,res) =>{
    if(req.url === '/' && req.method === 'GET')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`<h1>Hi vimukthi</h1>`);
    }
};