import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/tjenester", "routes/tjenester.tsx"),
  route("/prosjekter", "components/projects.tsx")
] satisfies RouteConfig;
