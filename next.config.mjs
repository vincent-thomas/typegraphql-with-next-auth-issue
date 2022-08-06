// @ts-check
import WindiCSSWebpackPlugin from "windicss-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.plugins.push(new WindiCSSWebpackPlugin());
    config.experiments.topLevelAwait = true;
    return config;
  }
};

export default nextConfig;
