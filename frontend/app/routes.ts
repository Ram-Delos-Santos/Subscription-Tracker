import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("/login", "routes/auth/login.tsx"),
] satisfies RouteConfig;
