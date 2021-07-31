import { oak } from "./deps.ts";

const api = new oak.Router();

api.get("/", (context: oak.RouterContext): void => {
  context.response.body = "Deptpoll!";
});

export default api;
