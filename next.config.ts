import type { NextConfig } from "next";
import withSvgr from "@svgr/webpack";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  /* other config options here */
};

export default nextConfig;