import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "/tjenester", file: "routes/tjenester.tsx" },
] satisfies RouteConfig;
