import BaseController from "../../core/base/BaseController";
import { Request, Response } from "express";

class HomeController extends BaseController {
  public index(req: Request, res: Response) {
    const data = {
      title: 'Welcome to Bekasi Framework',
      message: 'Hello World!'
    };
    this.view(res, 'index', data);
  }
}

export default HomeController;