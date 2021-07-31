import { assertEquals, oak } from "./test_deps.ts";
import api from '../deptpoll/api.ts';

Deno.test({
  name: "should api root path return correctly",
  async fn() {
    const context = oak.testing.createMockContext({
      path: "/",
    });
    const next = oak.testing.createMockNext();
    const middleware = api.routes();
    const routes = [...api];

    await middleware(context, next);
    
    assertEquals(routes[0].path, "/");
    assertEquals(context.response.body, "Deptpoll!");
  },
});
