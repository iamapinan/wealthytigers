// Component Loader for Wealthy Tigers Website
// This script loads shared components (header, footer) across all pages

(function() {
    'use strict';
    
    // Component loader configuration
    const COMPONENTS = {
        header: {
            placeholder: '#header-placeholder',
            file: 'components/header.html'
        },
        footer: {
            placeholder: '#footer-placeholder',
            file: 'components/footer.html'
        }
    };
    
    /**
     * Load a component from external HTML file
     */
    async function loadComponent(name, config) {
        try {
            const placeholder = document.querySelector(config.placeholder);
            if (!placeholder) {
                console.warn(`Placeholder ${config.placeholder} not found for ${name}`);
                return;
            }
            
            const response = await fetch(config.file);
            if (!response.ok) {
                throw new Error(`Failed to load ${name}: ${response.status}`);
            }
            
            const html = await response.text();
            placeholder.innerHTML = html;
            
            // Trigger custom event after component loads
            const event = new CustomEvent('componentLoaded', { 
                detail: { name, element: placeholder } 
            });
            document.dispatchEvent(event);
            
        } catch (error) {
            console.error(`Error loading ${name} component:`, error);
        }
    }
    
    /**
     * Set active navigation link based on current page
     */
    function setActiveNavLink() {
        // Wait a bit to ensure header is loaded
        setTimeout(() => {
            const navLinks = document.querySelectorAll('.nav-link');
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                
                // Remove active class from all
                link.classList.remove('active');
                
                // Add active class to current page
                if (href === currentPage || 
                    (currentPage === '' && href === 'index.html') ||
                    (currentPage === '/' && href === 'index.html')) {
                    link.classList.add('active');
                }
                
                // Special case for home page with hash links
                if (currentPage === 'index.html' && href.startsWith('#')) {
                    link.classList.add('active');
                }
            });
        }, 100);
    }
    
    /**
     * Initialize all components
     */
    async function initComponents() {
        // Load all components in parallel
        const promises = Object.entries(COMPONENTS).map(([name, config]) => 
            loadComponent(name, config)
        );
        
        await Promise.all(promises);
        
        // Set active nav link after header is loaded
        setActiveNavLink();
        
        // Reinitialize language system after components load
        if (window.initLanguage) {
            window.initLanguage();
        }
        
        // Reinitialize navigation and mobile menu
        if (window.initNavigation) {
            window.initNavigation();
        }
        if (window.initMobileMenu) {
            window.initMobileMenu();
        }
    }
    
    // Load components when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComponents);
    } else {
        initComponents();
    }
    
    // Export for global access if needed
    window.loadComponents = initComponents;
    
})();

