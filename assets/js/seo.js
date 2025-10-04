// SEO Manager for Wealthy Tigers Website
// Dynamically manages meta tags, structured data, and SEO for each page

(function() {
    'use strict';
    
    const SEO_CONFIG = {
        site: {
            name: 'Wealthy Tigers',
            url: 'https://wealthytigers.com',
            logo: 'https://wealthytigers.com/assets/images/logo-long.png',
            socialLinks: {
                facebook: 'https://www.facebook.com/wealthytigers',
                instagram: 'https://www.instagram.com/wealthytigers',
                linkedin: 'https://www.linkedin.com/company/wealthytigers'
            }
        },
        pages: {
            'index.html': {
                title: 'Wealthy Tigers - Multichannel Store | International Brands in Thailand',
                description: 'Curating and importing unique food, beverage, lifestyle, and fashion brands worldwide to deliver fresh choices and one-of-a-kind experiences to Thai consumers.',
                keywords: 'multichannel store Thailand, international brands Thailand, lifestyle brands, fashion import, food distribution, own brand development',
                ogImage: 'https://wealthytigers.com/assets/images/og-image.jpg',
                type: 'website',
                breadcrumb: [{name: 'Home', url: '/'}]
            },
            'about.html': {
                title: 'About Us - Wealthy Tigers | Leading Multichannel Platform in Thailand',
                description: 'Learn about Wealthy Tigers - a multichannel platform connecting international brands with Thai consumers across online and offline channels, while developing our own brand collections.',
                keywords: 'about wealthy tigers, multichannel platform, brand distribution Thailand, company vision mission',
                ogImage: 'https://wealthytigers.com/assets/images/og-about.jpg',
                type: 'website',
                breadcrumb: [
                    {name: 'Home', url: '/'},
                    {name: 'About Us', url: '/about.html'}
                ]
            },
            'collections.html': {
                title: 'Collections - Wealthy Tigers | Premium International Brands Coming Soon',
                description: 'Explore our upcoming collections of international food, lifestyle, and fashion brands. Stay tuned for new collections and collaborations launching soon.',
                keywords: 'brand collections, international products, fashion collections, lifestyle products, food brands',
                ogImage: 'https://wealthytigers.com/assets/images/og-collections.jpg',
                type: 'website',
                breadcrumb: [
                    {name: 'Home', url: '/'},
                    {name: 'Collections', url: '/collections.html'}
                ]
            },
            'partnership.html': {
                title: 'Partnership - Wealthy Tigers | Become Our Brand Partner in Thailand',
                description: 'Join Wealthy Tigers to launch your brand in Thailand through our multichannel platform. Professional brand distribution with market expertise and omnichannel solutions.',
                keywords: 'brand partnership Thailand, international brand distribution, multichannel partnership, Thailand market entry',
                ogImage: 'https://wealthytigers.com/assets/images/og-partnership.jpg',
                type: 'website',
                breadcrumb: [
                    {name: 'Home', url: '/'},
                    {name: 'Partnership', url: '/partnership.html'}
                ]
            },
            'contact.html': {
                title: 'Contact Us - Wealthy Tigers | Get in Touch for Partnership Opportunities',
                description: 'Contact Wealthy Tigers for partnership opportunities, brand distribution inquiries, and business expansion in Thailand. We are ready to help grow your brand.',
                keywords: 'contact wealthy tigers, partnership inquiry, brand distribution contact, Thailand business contact',
                ogImage: 'https://wealthytigers.com/assets/images/og-contact.jpg',
                type: 'website',
                breadcrumb: [
                    {name: 'Home', url: '/'},
                    {name: 'Contact', url: '/contact.html'}
                ]
            }
        }
    };
    
    function getCurrentPage() {
        let page = window.location.pathname.split('/').pop() || 'index.html';
        if (page === '' || page === '/') {
            page = 'index.html';
        }
        return page;
    }
    
    function getPageConfig() {
        const page = getCurrentPage();
        return SEO_CONFIG.pages[page] || SEO_CONFIG.pages['index.html'];
    }
    
    function updateMetaTags() {
        const config = getPageConfig();
        const currentUrl = `${SEO_CONFIG.site.url}/${getCurrentPage()}`;
        
        // Update title
        document.title = config.title;
        
        // Update or create meta tags
        updateMetaTag('name', 'description', config.description);
        updateMetaTag('name', 'keywords', config.keywords);
        updateMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
        
        // Update canonical
        updateLinkTag('canonical', currentUrl);
        
        // Open Graph tags
        updateMetaTag('property', 'og:type', config.type);
        updateMetaTag('property', 'og:url', currentUrl);
        updateMetaTag('property', 'og:title', config.title);
        updateMetaTag('property', 'og:description', config.description);
        updateMetaTag('property', 'og:image', config.ogImage);
        updateMetaTag('property', 'og:site_name', SEO_CONFIG.site.name);
        
        // Twitter Card
        updateMetaTag('name', 'twitter:card', 'summary_large_image');
        updateMetaTag('name', 'twitter:url', currentUrl);
        updateMetaTag('name', 'twitter:title', config.title);
        updateMetaTag('name', 'twitter:description', config.description);
        updateMetaTag('name', 'twitter:image', config.ogImage);
        
        // AI/LLM Optimization
        updateMetaTag('name', 'description:ai', config.description + ' Professional multichannel retail platform with omnichannel capabilities.');
    }
    
    function updateMetaTag(attribute, key, content) {
        let element = document.querySelector(`meta[${attribute}="${key}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attribute, key);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    }
    
    function updateLinkTag(rel, href) {
        let element = document.querySelector(`link[rel="${rel}"]`);
        if (!element) {
            element = document.createElement('link');
            element.setAttribute('rel', rel);
            document.head.appendChild(element);
        }
        element.setAttribute('href', href);
    }
    
    function injectStructuredData() {
        const config = getPageConfig();
        const currentUrl = `${SEO_CONFIG.site.url}/${getCurrentPage()}`;
        
        // Organization Schema
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SEO_CONFIG.site.url}/#organization`,
            "name": SEO_CONFIG.site.name,
            "url": SEO_CONFIG.site.url,
            "logo": {
                "@type": "ImageObject",
                "url": SEO_CONFIG.site.logo
            },
            "description": "Leading multichannel store importing and distributing international food, beverage, lifestyle, and fashion brands in Thailand",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "TH"
            },
            "sameAs": Object.values(SEO_CONFIG.site.socialLinks),
            "areaServed": {
                "@type": "Country",
                "name": "Thailand"
            }
        };
        
        // WebSite Schema
        const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SEO_CONFIG.site.url}/#website`,
            "url": SEO_CONFIG.site.url,
            "name": SEO_CONFIG.site.name,
            "publisher": {
                "@id": `${SEO_CONFIG.site.url}/#organization`
            },
            "inLanguage": ["th-TH", "en-US"]
        };
        
        // WebPage Schema
        const webpageSchema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${currentUrl}#webpage`,
            "url": currentUrl,
            "name": config.title,
            "description": config.description,
            "isPartOf": {
                "@id": `${SEO_CONFIG.site.url}/#website`
            },
            "about": {
                "@id": `${SEO_CONFIG.site.url}/#organization`
            },
            "inLanguage": "th-TH"
        };
        
        // BreadcrumbList Schema
        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": config.breadcrumb.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": `${SEO_CONFIG.site.url}${item.url}`
            }))
        };
        
        // Inject all schemas
        injectSchema('organization-schema', organizationSchema);
        injectSchema('website-schema', websiteSchema);
        injectSchema('webpage-schema', webpageSchema);
        injectSchema('breadcrumb-schema', breadcrumbSchema);
    }
    
    function injectSchema(id, schema) {
        let script = document.getElementById(id);
        if (!script) {
            script = document.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schema, null, 2);
    }
    
    function initSEO() {
        updateMetaTags();
        injectStructuredData();
        
        // Add Open Graph prefix to html tag
        const htmlTag = document.documentElement;
        if (!htmlTag.hasAttribute('prefix')) {
            htmlTag.setAttribute('prefix', 'og: https://ogp.me/ns#');
        }
        
        // Dispatch SEO loaded event
        const event = new CustomEvent('seoLoaded');
        document.dispatchEvent(event);
    }
    
    // Initialize SEO when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSEO);
    } else {
        initSEO();
    }
    
    // Export for global access
    window.initSEO = initSEO;
    window.SEO_CONFIG = SEO_CONFIG;
    
})();

