# Bekasi Framework
### Typescript Framework for MVC

[![TypeScript](https://img.shields.io/badge/TypeScript-2.0-blue.svg)](https://www.typescriptlang.org/)

Bekasi Framework is a lightweight web framework built using TypeScript, inspired by CodeIgniter. It follows the Model-View-Controller (MVC) architectural pattern, providing a structured and modular approach to developing web applications.

## Features

- **MVC Architecture**: Organize your code with a Model-View-Controller structure.
- **Customizable Templates**: Use your own HTML template format (e.g., `.bekasi`).
- **Easy Routing**: Define routes easily and handle HTTP requests efficiently.
- **Extensible**: Add your own controllers, models, and views to customize the framework.

### Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/ProjectFramework.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ProjectFramework
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

## Running the Application

To run the application in normal mode:

```bash
npm start
```

To run the application in development mode (watch mode):

```bash
npm run dev
```

## Accessing the Application

The application will be accessible at `http://localhost:${YOUR_PORT}` by default. Adjust the port and other configurations as needed.

## Project Structure

```
───src
│ ├───app
│ │ ├───config
│ │ ├───controllers
│ │ ├───models
│ │ └───views
│ └───core
│ ├───base
│ ├───entity
│ └───utils
```

## Usage

1. Create Controllers: Define your controllers in the src/app/controllers directory.
2. Create Views: Place your HTML templates with the desired format (e.g., .bekasi) in the src/app/views directory.
3. Define Routes: Configure your routes in the src/app/config/route.ts file.

## Example

Lets create a simple "Hello World" example:

1. Create a new controller in `src/app/controllers/HomeController.ts`;

```typescript
import BaseController from '../../core/base/baseController';
import { Request, Response } from 'express';

class HomeController extends BaseController {
  index(req: Request, res: Response): void {
    const data = {
      title: 'Welcome to Bekasi Framework',
      message: 'Hello World!',
    };

    this.sendHtml(res, 'index', data);
  }
}

export default new HomeController();
```

2. Create a corresponding view in src/app/views/index.bekasi:

```bekasi
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>{{ message }}</h1>
  </body>
</html>

```

3. Add a route for the controller in src/app/config/route.ts:

```typescript
import to from '../../core/utils/to';

const route = (router: any) => {
  router.get('/', (req: any, res: any) => to('home', 'index', req, res));

  return router;
}

export default route;
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file.

## Contribution

If you wish to contribute to this project, please refer to the [Contribution Guidelines](CONTRIBUTING.md) for more details.

## Contact Us

- **Developer Name:** Taruna Wahyudi
- **Email:** wahyuditaruna97@gmail.com

Feel free to add contact information or contribution guidelines as needed. Make sure to include contribution details and a contribution guide that fits your project.
