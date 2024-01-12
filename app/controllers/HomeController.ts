import { IncomingMessage, ServerResponse } from "http";

class HomeController {
  public hello(request: IncomingMessage, response: ServerResponse): void {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello from Home!');
  }
}

export default HomeController;