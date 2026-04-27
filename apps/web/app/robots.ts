import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*', // Applies to all bots (Google, Bing, etc.)
            allow: '/',      // Allow crawling on the whole site
            disallow: [
                '/thankyou',
            ],
        },
        sitemap: 'https://harmonyhillbali.com/sitemap.xml',
    }
}