import { AppContext } from "../apps/site.ts";
import { SITE_ID } from "../constants.tsx";

export interface Props {
  productId: string;
  comment: string;
}

export default async function addComment(
  { productId, comment }: Props,
  _req: Request,
  _ctx: AppContext
) {
  const response = await fetch("https://camp-api.deco.cx/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": SITE_ID,
    },
    body: JSON.stringify({
      productId,
      comment,
    }),
  });

  return response.json();
}
