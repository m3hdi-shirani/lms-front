const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000", // پورتی که لاراول روی اون اجرا میشه
      },
    ],
  },
};

export default nextConfig;
