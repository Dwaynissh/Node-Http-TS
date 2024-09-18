import http, {IncomingMessage, ServerResponse} from "http"

const port: number = 2000

const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200)
    res.write("server up and running")
    res.end()
})

server.listen (port,()=>{
    console.log(`Server Listening up and running ${port}`);
})