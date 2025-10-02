import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/tjenester", "routes/tjenester.tsx"),
  route("/om-oss", "routes/om-oss.tsx"),
] satisfies RouteConfig;
