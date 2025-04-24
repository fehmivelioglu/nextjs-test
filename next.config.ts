import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  // remotePatterns:[
  //   {
  //     protocol:"https",
  //     hostname:"jsonplaceholder.typicode.com",
      
  //   }
  // ]  
  async rewrites(){
    return [
      {
        source:"/rewrite/:path*",
        destination:"/"
      }
    ]
  },
  async headers(){
    return [
      {
        source:"/headers",
        headers:[
          {
            key:"x-custom-header",
            value:"my-header-value"
          }
        ]
      }
    ]
  },
};
export default nextConfig;
