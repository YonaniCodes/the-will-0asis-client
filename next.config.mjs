/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qrpuyoynljbtbpdjptdz.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // output: "export", // read more   about this
};

export default nextConfig;
