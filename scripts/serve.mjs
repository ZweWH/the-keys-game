import http from 'node:http';
import {createReadStream, statSync} from 'node:fs';
import {resolve, extname, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../public/',import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.mp4':'video/mp4','.woff2':'font/woff2'};
const server = http.createServer((request,response)=>{
  try {
    let pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    if (pathname === '/__preview/mobile') {
      const edition = new URL(request.url,'http://localhost').searchParams.get('edition') === 'five' ? 'five' : 'eight';
      response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'}).end(`<!doctype html><html><head><meta name="viewport" content="width=device-width"><title>Mobile layout check</title><style>body{margin:0;background:#25352f;display:grid;place-items:start center;padding:20px}iframe{width:390px;height:844px;border:1px solid #65766b;background:#071b18;max-width:100%}</style></head><body><iframe title="390 pixel mobile preview" src="/the-keys-game/?edition=${edition}"></iframe></body></html>`);
      return;
    }
    // Test both the root and the same subdirectory layout as a GitHub project Page.
    if (pathname.startsWith('/the-keys-game/')) pathname = pathname.slice('/the-keys-game'.length);
    const file = resolve(root,`.${pathname.endsWith('/') ? `${pathname}index.html` : pathname}`);
    if (!file.startsWith(resolve(root)+sep)) {response.writeHead(403).end();return;}
    const stat = statSync(file);
    if (!stat.isFile()) {response.writeHead(404).end();return;}
    const headers = {'Content-Type':types[extname(file)] || 'application/octet-stream','Accept-Ranges':'bytes','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'};
    const range = request.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      let start = match?.[1] ? Number(match[1]) : 0;
      let end = match?.[2] ? Number(match[2]) : stat.size-1;
      if (match && !match[1] && match[2]) {start = Math.max(0,stat.size-Number(match[2]));end=stat.size-1;}
      end = Math.min(end,stat.size-1);
      if (!match || start > end || start >= stat.size) {response.writeHead(416,{'Content-Range':`bytes */${stat.size}`}).end();return;}
      response.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${stat.size}`,'Content-Length':end-start+1});
      if (request.method === 'HEAD') response.end(); else createReadStream(file,{start,end}).pipe(response);
    } else {
      response.writeHead(200,{...headers,'Content-Length':stat.size});
      if (request.method === 'HEAD') response.end(); else createReadStream(file).pipe(response);
    }
  } catch {response.writeHead(404,{'Content-Type':'text/plain'}).end('Not found');}
});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}/the-keys-game/`));
