import { V2_MetaFunction } from "@remix-run/node";

import supabase from "~/utils/supabase";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Dashboard" }];
};

export function loader() {
  // Get the JWT from the cookie
  // then get the user from supabase
}

export default function Dashboard() {
  const data = useLoaderData();
  return <main className="container mx-auto"></main>;
}
