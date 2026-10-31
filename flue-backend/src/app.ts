import {Hono} from "hono";
import {createAgentRouter} from "@flue/runtime/routing";
import {CustomerSupport} from "./agents/cs.ts";
import {cors} from "hono/cors";

const app = new Hono();

app.use("/agents/*", cors({
        origin: "http://localhost:5713",
        allowMethods: ["GET", "POST", "PUT", "OPTIONS"],
        allowHeaders: ["Content-Type", "Authorization"],
        exposeHeaders: ["Location", "Stream-Next-Offset", "Stream-Up-To-Date"],
    })
);

app.use("/agents/*", async (context, next) => {
    const auth = context.req.header("Authorization");

    if (!auth?.includes("TRUSTME")) {
        return context.json({error: "Not authenticated"}, 401);
    }

    await next();
})

app.route("/agents", createAgentRouter(CustomerSupport));

export default app;