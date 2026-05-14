import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import "./build.mjs";
const types = { ".html":"text/html; charset=utf-8", ".css":"text/css", ".svg":"image/svg+xml", ".txt":"text/plain", ".xml":"application/xml" };
const server = createServer(async (req,res)=>{try{let url = new URL(req.url || "/", "http://localhost").pathname; let file = normalize(join("dist", url)); if(url.endsWith("/")) file = join(file,"index.html"); const s = await stat(file).catch(()=>null); if(!s?.isFile()) file = join("dist", url, "index.html"); const data = await readFile(file); res.writeHead(200,{"content-type":types[extname(file)]||"application/octet-stream"}); res.end(data);}catch{res.writeHead(404);res.end("Not found");}});
server.listen(3000,()=>console.log("Asker Symfoniorkester preview: http://localhost:3000"));
