import { Application } from 'oak';
import { config } from "dotenv";
import logger from './middlewares/logger.ts';
import apiRoutes from "@routes/index.routes.ts";

const { PORT = 3000 } = config();
const app = new Application();

app.use(logger);
app.use(apiRoutes.routes())
console.log('Server Up')
await app.listen({ port: +PORT })


