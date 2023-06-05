/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://bwallace2:brady987@cluster0.ucedcuk.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
