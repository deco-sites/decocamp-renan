import { SectionProps } from "deco/mod.ts";
import type { AppContext } from "../../apps/site.ts";

export interface Props {
  /** * @hide */
  total?: number;
}

export async function loader(_props: null, _req: Request, ctx: AppContext) {
  const response = await ctx.invoke.site.loaders.totalLikes();
  console.log("response", response);
  return { total: response.total };
}

export default function TotalEvents({ total }: SectionProps<typeof loader>) {
  return <h1 class="text-lg text-center py-5">Site Saves: {total}</h1>;
}
