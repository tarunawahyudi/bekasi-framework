import { IncomingMessage, ServerResponse } from "http";

class ProfileController {
  public static handlerRequest(request: IncomingMessage, response: ServerResponse) {
    console.log('ini cuy');
    response.end('Hello World');
  }
}

export default ProfileController;