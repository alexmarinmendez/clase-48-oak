import { Middleware } from "oak";

const logger: Middleware = async (ctx, next ) => {
    await next();
    const body = await ctx.request.body().value;
    const payloadLog = body ? `Payload => ${JSON.stringify(body, null, 2)}` : `No payload`
    console.log(`[${ctx.request.method}] ${ctx.request.url} ${payloadLog}`)
}

export default logger;