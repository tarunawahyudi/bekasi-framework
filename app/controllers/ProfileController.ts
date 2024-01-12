import { IncomingMessage, ServerResponse } from "http";

class ProfileController {
  public hello(request: IncomingMessage, response: ServerResponse): void {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello from Profile!");
  }
}

export default ProfileController;
