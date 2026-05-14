import { stat } from "node:fs/promises";
import { startServer } from "./server.mjs";

const distExists = await stat("dist/index.html").then((entry) => entry.isFile()).catch(() => false);

if (!distExists) {
  console.error("dist/index.html does not exist. Run npm run build before npm run preview.");
  process.exit(1);
}

startServer({ port: Number(process.env.PORT ?? 4173), label: "static preview" });
