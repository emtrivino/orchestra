import "./build.mjs";
import { startServer } from "./server.mjs";

startServer({ port: Number(process.env.PORT ?? 3000), label: "dev server" });
