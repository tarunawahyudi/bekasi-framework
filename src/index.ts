import express from 'express';
import route from './app/config/route';

const app = express();
const router = express.Router();

const result = route(router);

app.use(result);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});