import { render } from "@testing-library/react";
import HomeHeader from "./HomeHeader";

describe("HomeHeader", () => {
  it("should contain the title", () => {
    const { getByText } = render(<HomeHeader />);

    const element = getByText("ZErviEZ");

    expect(element).toBeInTheDocument();
  });
});
