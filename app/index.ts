import http from 'http';
import Router from './Router';
import { host, port } from './config/connection';

http.createServer((request, response) => {
  Router.route(request, response);
  console.log(`Server run in http://${host}:${port}`);
}).listen(port);