import { IncomingMessage, ServerResponse } from "http";
import Route from "./entity/Route";

class Router {

  private static routes: Route[] = [];

  public static add({
    method,
    path,
    controller,
    func,
    middleware,
  }: {
    method: string;
    path: string;
    controller: string;
    func: string;
    middleware: string[];
  }, request: IncomingMessage, response: ServerResponse): void {
    const route = new Route();
    route.setMethod(method);
    route.setPath(path);
    route.setController(controller);
    route.setFunction(func);
    route.setMiddleware(middleware);

    Router.routes.push(route);
    Router.run(route, request, response);
  }

  public static run(route: Route, request: IncomingMessage, response: ServerResponse) {
    let path = route.getPath();
    let controllerName = Router.getControllerName(route.getController());
    
    if (path === request.url) {
      const Controller = require(`../controllers/${controllerName}`).default;
      Controller.handlerRequest(request, response);
    } else {
      Router.handleNotFound(response);
    }

  }

  private static getControllerName(controllerName: string): string {
    const firstChar = controllerName.charAt(0).toUpperCase();
    return `${firstChar}${controllerName.slice(1)}Controller`;
  }

  private static handleNotFound(response: ServerResponse): void {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 Not Found');
  }
}

export default Router;
