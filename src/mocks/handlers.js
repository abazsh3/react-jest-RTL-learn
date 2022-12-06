import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoop", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagepath: "/images/chocolate.png" },
        { name: "Vanilla", imagepath: "/images/vanila.png" },
      ])
    );
  }),
];
