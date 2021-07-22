import SolarFlares from "../pages/solar-flares";
import { render } from "@testing-library/react";
import { server, rest } from "./mocks/server";

const NASA_URL = "https://api.nasa.gov/DONKI/FLR";

const NO_DATA_RESPONSE = rest.get(NASA_URL, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json([]));
});

function errorResponse(errorClass) {
  return rest.get(NASA_URL, async (req, res, ctx) => {
    return res(ctx.status(errorClass), ctx.json({}));
  });
}

describe("<SolarFlares />", () => {
  it("renders correctly", async () => {
    const { findByText } = render(<SolarFlares />);
    await findByText("Loading...");
    await findByText("Solar Flares");
  });

  it("Handles the no data case", async () => {
    server.use(NO_DATA_RESPONSE);
    const { findByText } = render(<SolarFlares />);
    await findByText("Loading...");
    await findByText("No solar flares detected.");
  });

  it("500 fails gracefully", async () => {
    server.use(errorResponse(500));
    const { findByText } = render(<SolarFlares />);
    await findByText("Loading...");
    await findByText(/Request failed with status code 500/);
  });

  it("400 fails gracefully", async () => {
    server.use(errorResponse(400));
    const { findByText } = render(<SolarFlares />);
    await findByText("Loading...");
    await findByText(/Request failed with status code 400/);
  });
});
