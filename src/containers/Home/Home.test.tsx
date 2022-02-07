import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("should contain a header", () => {
    const { getByTestId } = render(<Home />);

    const element = getByTestId("header");

    expect(element).toBeInTheDocument();
  });
});
