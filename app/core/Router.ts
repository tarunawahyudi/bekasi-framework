import { IncomingMessage, ServerResponse } from "http";
import Route from "./entity/Route";

class Router {
  private static routes: Route[] = [];

  public static add(
    {
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
    },
    request: IncomingMessage,
    response: ServerResponse
  ): void {
    const route = new Route();
    route.setMethod(method);
    route.setPath(path);
    route.setController(controller);
    route.setFunction(func);
    route.setMiddleware(middleware);

    Router.routes.push(route);
  }

  public static run(request: IncomingMessage, response: ServerResponse) {
    let found = false;

    Router.routes.forEach((route) => {
      if (request.url === route.getPath()) {
        found = true;
        route.execute(request, response);
      }
    });

    if (!found) {
      Router.handleNotFound(response);
    }
  }

  private static handleNotFound(response: ServerResponse): void {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 Not Found");
  }
}

export default Router;
