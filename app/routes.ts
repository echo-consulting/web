import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/tjenester", "routes/tjenester.tsx"),
  route("/prosjekter", "routes/projectOverview.tsx"),
  route("/prosjekter/:slug", "routes/projectPage.tsx"),
] satisfies RouteConfig;
