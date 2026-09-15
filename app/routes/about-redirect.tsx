import { redirect } from "react-router";
import type { Route } from "./+types/about-redirect";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const search = url.search;
  return redirect(`/a-propos${search}`, { status: 301 });
}

export default function AboutRedirect() {
  return null;
}
