import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("/login", "routes/auth/login/login.tsx"),
    route("/signup", "routes/auth/signup/signup.tsx"),
    route("/home", "routes/home/home.tsx")
] satisfies RouteConfig;
