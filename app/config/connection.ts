import dotenv from 'dotenv';

dotenv.config();

const host = process.env.SERVER_HOST || 'localhost';
const port: number = Number(process.env.SERVER_PORT) || 80;

export { host, port };