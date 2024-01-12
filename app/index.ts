import http from 'http';
import { host, port } from './config/connection';
import Router from './core/Router';

http.createServer((request, response) => {
  
  Router.add({
    method: 'GET',
    path: '/',
    controller: 'home',
    func: 'hello',
    middleware: []
  }, request, response);
}).listen(port);