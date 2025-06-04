import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/tjenester", "routes/tjenester.tsx"),
  route("/kontakt-oss", "routes/contact.tsx"),
] satisfies RouteConfig;
