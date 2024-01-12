import { IncomingMessage, ServerResponse } from "http";

class HomeController {
  public hello(request: IncomingMessage, response: ServerResponse): void {
    response.write('Hello from Home!');
  }
}

export default HomeController;