import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("/login", "routes/auth/login/login.tsx"),
    route("/signup", "routes/auth/signup/signup.tsx")
] satisfies RouteConfig;
