import { IncomingMessage, ServerResponse } from "http";

class Router {
  static route(request: IncomingMessage, response: ServerResponse) {
    const url = request.url || '';
    const controllerName = this.getControllerName(url);
    
    try {
      const Controller = require(`./controllers/${controllerName}.ts`);
      Controller.handlerRequest(request, response);
      
      // if (Controller && typeof Controller.handleRequest === 'function') {
      //   console.log('benar');
        
      //   Controller.handleRequest(request, response);
      // } else {
      //   this.handleNotFound(response);
      // }
    } catch (error) {
      this.handleNotFound(response);
    }
  }

  private static getControllerName(url: string): string {
    const controllerName = url.slice(1);
    return `${controllerName.charAt(0).toUpperCase()}${controllerName.slice(1)}Controller`;
  }

  private static handleNotFound(response: ServerResponse): void {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 Not Found');
  }
}

export default Router;
