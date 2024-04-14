// @ts-check
import "./src/env.mjs";

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@saasfly/common", "@saasfly/ui"],
  pageExtensions: ["ts", "tsx"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // output: "export", // 移除 { output: 'export' } 并使用服务器端渲染
};

export default config;
