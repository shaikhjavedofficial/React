// src/mocks/handlers.js
import { rest } from "msw";
const postData = [
  {
    id: 1,
    name: "demo",
  },
  {
    id: 2,
    name: "second_demo",
  },
];

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", null),

  // Handles a GET /user request
  rest.get(
    "http://my-json-server.typicode.com/shaikhjavedofficial/server_db/data",
    (req, res, ctx) => {
      return res(
        ctx.json({
          data: postData,
          name: "devil's",
        })
      );
    }
  ),
];
