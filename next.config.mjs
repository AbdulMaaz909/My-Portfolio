// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     outputFileTracingRoot: "C:\\Users\\abdul\\Portfolio\\portfilio",
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: require('path').join(__dirname, '../../')
  }
}

module.exports = nextConfig