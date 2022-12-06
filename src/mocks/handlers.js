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
  rest.get("http://localhost:3030/topping", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Cherries", imagepath: "/images/cherries.png" },
        { name: "M&Ms", imagepath: "/images/m-and-ms.png" },
        { name: "Hot fudge", imagepath: "/images/hot-fudge.png" },
      ])
    );
  }),
];
