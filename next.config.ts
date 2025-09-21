import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    domains: ["zpuenityjokfjhmutjjv.supabase.co", "dkstatics-public.digikala.com"],
  },

};

export default nextConfig;