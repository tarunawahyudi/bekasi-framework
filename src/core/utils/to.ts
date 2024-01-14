import path from 'path';

async function to(controllerName: string, method: string, req: any, res: any) {
  try {
    const firstCharController = controllerName.charAt(0).toUpperCase();
    const fullNameController = `${firstCharController}${controllerName.slice(1)}Controller`;
    const controllerPath = path.join(__dirname, '../../app/controllers/', fullNameController);

    const { default: ControllerClass } = await import(controllerPath);

    const controllerInstance = new ControllerClass();

    if (typeof controllerInstance[method] === 'function') {
      controllerInstance[method](req, res);
    } else {
      res.status(404).send('Method not found');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}

export default to;