import { Application } from 'oak';

const app = new Application();
app.use(ctx => {
    ctx.response.type = "text/html"
    ctx.response.body = "<h1>Hola Mundo!!!</h1>"
})

console.log('Server Up')
await app.listen({ port: 8080 })


