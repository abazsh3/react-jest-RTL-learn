import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

export const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });
