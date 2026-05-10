/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

// These two lines replace 'require' for finding your monorepo root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    // output: 'standalone',
    outputFileTracingRoot: path.join(__dirname, '../../'),
    // experimental: {turbo: false},
    transpilePackages: [
        "@harmonyhill/utils",
        "@harmonyhill/database"
    ],
    async redirects() {
        return [{
            source: '/junglenook',
            destination: '/',
            permanent: true, // send 301 redirect
        }, {
            source: '/menu',
            destination: 'https://www.canva.com/design/DAGhYRNTFgc/BkFZ5gh3rJnTuon_lI1OCg/view?utm_content=DAGhYRNTFgc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hffa6aee53f',
            permanent: true,
        }, {
            source: '/junglenookmenu',
            destination: 'https://www.canva.com/design/DAGZCJNzgeA/L9Tz7Y8pdyin1PZQ9KeN7Q/view?utm_content=DAGZCJNzgeA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99deea3dde',
            permanent: true,
        }, {
            // looks for any path that ends in .html, redirects to the page without .html
            source: '/:path*.html', 
            destination: '/:path*', // Redirects to the same path without .html
            permanent: true, // This tells Google it's a 301 (Permanent) move
        }];
    }
};

export default nextConfig;
