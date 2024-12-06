import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function setup(
  jsx: React.ReactNode,
  options?: Omit<RenderOptions, "queries"> | undefined
) {
  return {
    user: userEvent.setup(),
    ...render(jsx, options),
  };
}
