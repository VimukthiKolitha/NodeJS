
//to deploy this side go to render.com 
import { createServer } from "node:http";
import { log } from "node:console";
import { join } from "node:path";
import workerpool from "workerpool";
import { fileURLToPath } from "node:url";

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

// Initialize the worker pool
const fileReadPool = workerpool.pool(join(__dirname, "./file-read-worker.js"));

createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    fileReadPool
      .exec("html", ["index.html"]) // Call the worker's `html` method
      .then((result) => {
        res.end(result); // Respond with the file content
      })
      .catch((err) => {
        log(`Error: ${err.message}`);
        res.statusCode = 500;
        res.end("Internal Server Error");
      });
  }else if(req.url === '/about'){

    res.writeHead(200, { "content-type": "text/html" });

    fileReadPool
      .exec("html", ["about.html"]) // Call the worker's `html` method
      .then((result) => {
        res.end(result); // Respond with the file content
      })
      .catch((err) => {
        log(`Error: ${err.message}`);
        res.statusCode = 500;
        res.end("Internal Server Error");
      });

  }
  
  else {
    res.writeHead(404);
    res.end("Not Found");
  }
  
}).listen(4000, () => {
  log("Server is running on http://localhost:4000");
});
