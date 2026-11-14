// Formerly the inline `tailwind.config` used with the cdn.tailwindcss.com runtime.
// Rebuild assets/tailwind.css after editing index.html: see README.md.
const siteConfig = {
    theme: {
        extend: {
            colors: {
                brand: '#1d4ed8',
                'brand-dark': '#1e3a8a',
                gold: '#ffcc00',
                navy: '#0a1628',
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
        }
    }
};

module.exports = { content: ['./index.html'], ...siteConfig };
