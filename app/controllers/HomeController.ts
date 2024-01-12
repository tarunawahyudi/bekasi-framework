import { IncomingMessage, ServerResponse } from "http";

class HomeController {
  public static handlerRequest(request: IncomingMessage, response: ServerResponse) {
    console.log('ini cuy');
    
    response.write('Ini homepage');
    response.end();
  }
}

export default HomeController;