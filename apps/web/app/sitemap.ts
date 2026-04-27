import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://harmonyhillbali.com'

    return [{
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    },{
        url: `${baseUrl}/book`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },{
        url: `${baseUrl}/harmonyhill-gallery`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },{
        url: `${baseUrl}/junglenook-gallery`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }]
    // Add your other pages here (Gallery, FAQ, etc.)
}