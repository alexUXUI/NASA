import { render } from "@testing-library/react";
import SolarFlares from "../pages/solar-flares";

describe("<SolarFlares />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<SolarFlares />);
    expect(getByText("Solar Flares")).toBeInTheDocument();
  });
});