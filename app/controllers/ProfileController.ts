import { IncomingMessage, ServerResponse } from "http";

class ProfileController {
  public hello(request: IncomingMessage, response: ServerResponse): void {
    response.write("Hello from Profile!");
  }
}

export default ProfileController;
