import { server } from "../../../mocks/server";
import { rest } from "msw";
import { render, screen, waitFor } from "@testing-library/react";
import OrderEntry from "../OrderEntry";

test("handle error for scoops and toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoop"),
    (req, res, ctx) => {
      res(ctx.status(500));
    },
    rest.get("http://localhost:3030/topping"),
    (req, res, ctx) => {
      res(ctx.status(500));
    }
  );
  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");

    expect(alerts).toHaveLength(2);
  });
});
