import { oak } from "./deps.ts";
import api from "./api.ts";
import Default from "./defaults.ts";

/**
 * Setup HTTP app server
 */
async function setupServer(): Promise<void> {
  const app = new oak.Application();
  const port = +(Deno.env.get("PORT") || Default.Port);
  const hostname = Deno.env.get("HOST") || Default.Host;

  app.use(api.routes());
  app.use(api.allowedMethods());

  console.log(`\n server: http://localhost:${port}/ \n`);
  await app.listen({ port, hostname: hostname });
}

export default setupServer;
