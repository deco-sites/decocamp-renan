import { AppContext } from "../apps/site.ts";
import { SITE_ID } from "../constants.tsx";

export default async function totalLikes(
  _props: unknown,
  _req: Request,
  _ctx: AppContext,
) {
  const response = await fetch("https://camp-api.deco.cx/events", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": SITE_ID,
    },
  });

  return response.json();
}
