import { Response } from "express";
import fs from 'fs';
import path from 'path';

class BaseController {

  private viewsPath = path.join(__dirname, '../../app/views');
  private response: Response | undefined;
  
  sendJson(response: Response, data: any): void {
    response.json(data);
  }

  view(response: Response, viewName: string, data: any): void {
    const html = this.renderHtml(viewName, data);
    response.send(html);
  }

  private renderHtml(viewName: string, data: any): string {
    const filePath = path.join(this.viewsPath, `${viewName}.bekasi`);
    const template = fs.readFileSync(filePath, 'utf-8');
    return this.interpolate(template, data);
  }

  private interpolate(content: string, data: any): string {
    const keys = Object.keys(data);
    keys.forEach((key) => {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
      content = content.replace(regex, data[key]);
    });

    return content;
  }
}

export default BaseController;