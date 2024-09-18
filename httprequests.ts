import http, { IncomingMessage, ServerResponse } from "http";

import fs from "fs"
import path from "path"

const port: number = 4000;


const server = http.createServer (
    (req: IncomingMessage, res: ServerResponse<IncomingMessage>)=> {
        res.writeHead(200);

        let connect: string = "../site/"
        switch (req.url) {
            case "/":
                connect += "home.html"
                res.statusCode = 200;
                break;
            case "/about": 
                connect += "about/html";
                res.statusCode = 200;
                break;
            case "/contact":
                connect += "contact.html";
                res.statusCode = 200;
                break;
            default:
                connect += "404.html";
                res.statusCode =  404;
                break
        }

        fs.readFile(path.join(__dirname, connect), (error, data)=>{
            if (error) {
                console.log("An error occured", error);
                res.end();
            } else {
                res.write(data);
                res.end()
            }
        });
    }
);

server.listen (port, () => {
    console.log("");
    console.log("server is listening to port on port", port);
})



// const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.writeHead(200);
//     res.write("Server Activated. Up and Running");
  
//     let browserName: any = req.headers['user-agent'];
//     let specs: string = os.cpus()[0].model;
//     console.log(`You are currently on ${browserName} And this is your device specs is ${specs}`);
//     res.end();
//   });
  
//   server.listen(port, () => {
//     console.log(`Server Listening up and running on port ${port}`);
//   });
  