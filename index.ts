import { Application } from 'oak';
import { config } from "dotenv";

const { PORT = 3000 } = config();
const app = new Application();
app.use(ctx => {
    ctx.response.type = "text/html"
    ctx.response.body = "<h1>Hola Mundo!!!</h1>"
})

console.log('Server Up')
await app.listen({ port: +PORT })


