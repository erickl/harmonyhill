/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
import { EXT_LINKS } from './constants/links.ts';
import createMDX from '@next/mdx'

// These two lines replace 'require' for finding your monorepo root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

const nextConfig = {
    // output: 'standalone',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
            destination: EXT_LINKS.FOOD_MENU_HH,
            permanent: false,
        }, {
            source: '/junglenookmenu',
            destination: EXT_LINKS.FOOD_MENU_JN,
            permanent: false,
        }, {
            source: '/index',
            destination: '/',
            permanent: true,
        }, {
            // looks for any path that ends in .html, redirects to the page without .html
            source: '/:path*.html',
            destination: '/:path*', // Redirects to the same path without .html
            permanent: true, // This tells Google it's a 301 (Permanent) move
        }];
    }
};

export default withMDX(nextConfig);
