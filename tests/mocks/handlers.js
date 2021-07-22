import { rest } from "msw";
import SOLAR_FLARE_RESPONSE from "./solarFlare.mock";

export const handlers = [
  rest.get("https://api.nasa.gov/DONKI/FLR", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SOLAR_FLARE_RESPONSE));
  }),
];
