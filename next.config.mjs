/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";
import withPlugins from "next-compose-plugins";
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["pino", "pino-pretty"],
    proxyTimeout: 300_000,
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  reactStrictMode: false,
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
