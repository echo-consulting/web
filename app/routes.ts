import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/tjenester", "routes/tjenester.tsx"),
  route("/blog", "routes/blog.tsx"),
  route("/blog/:slug", "routes/blog.$slug.tsx"),
] satisfies RouteConfig;
