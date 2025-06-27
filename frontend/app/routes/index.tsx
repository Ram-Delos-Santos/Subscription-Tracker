import type { Route } from "./+types/index";
import { Welcome } from "./welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Subscription Tracker" },
    { name: "description", content: "Welcome to Subscription Tracker" },
  ];
}

export default function Home() {
  return <Welcome />;
}
