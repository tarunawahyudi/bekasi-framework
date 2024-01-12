class Route {
    private _method: string = 'GET';
    private _path: string = '/';
    private _controller: string = '';
    private _function: string = '';
    private _middleware: string[] = [];

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