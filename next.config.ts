import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/jobtrack",
        destination: "https://jobtrack.lxhungdp.workers.dev/jobtrack",
      },
      {
        source: "/jobtrack/:path*",
        destination: "https://jobtrack.lxhungdp.workers.dev/jobtrack/:path*",
      },
    ];
  },
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/software-projects", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/work", destination: "/", permanent: true },
      { source: "/work/pus-pro", destination: "/pus", permanent: true },
      { source: "/work/castcontrol", destination: "/castcontrol", permanent: true },
      { source: "/work/rc-designer", destination: "/RCdesigner", permanent: true },
      { source: "/work/anchor-designer", destination: "/anchor", permanent: true },
      { source: "/work/truss-designer", destination: "/truss", permanent: true },
      { source: "/work/steel-bridge-analysis", destination: "/steelbridge", permanent: true },
      { source: "/work/bridge-alignment", destination: "/alignment", permanent: true },
      { source: "/work/moving-load", destination: "/movingload", permanent: true },
    ];
  },
};

export default nextConfig;
