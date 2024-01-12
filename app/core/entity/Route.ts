import { IncomingMessage, ServerResponse } from "http";

class Route {
  private _method: string = "GET";
  private _path: string = "/";
  private _controller: string = "";
  private _function: string = "";
  private _middleware: string[] = [];

  public execute(request: IncomingMessage, response: ServerResponse): void {
    const Controller =
      require(`../../controllers/${this.getControllerName()}`).default;
    const controllerInstance = new Controller();
    controllerInstance[this._function](request, response);
  }

  private getControllerName() {
    const firstChar = this.getController().charAt(0).toUpperCase();
    return `${firstChar}${this.getController().slice(1)}Controller`;
  }

  public getMethod(): string {
    return this._method;
  }

  public getPath(): string {
    return this._path;
  }

  public getController(): string {
    return this._controller;
  }

  public getFunction(): string {
    return this._function;
  }

  public getMiddleware(): string[] {
    return this._middleware;
  }

  public setMethod(method: string) {
    this._method = method;
  }

  public setPath(path: string) {
    this._path = path;
  }

  public setController(controller: string) {
    this._controller = controller;
  }

  public setFunction(func: string) {
    this._function = func;
  }

  public setMiddleware(middleware: string[]) {
    this._middleware = middleware;
  }
}

export default Route;
