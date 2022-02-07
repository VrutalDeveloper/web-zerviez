import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Layout from "./Layout";

describe("Layout", () => {
  it("should show children correctly", () => {
    const children = <div data-testid="child">some</div>;

    const { getByTestId } = render(<Layout>{children}</Layout>);

    const element = getByTestId("child");

    expect(element).toBeInTheDocument();
  });
});
