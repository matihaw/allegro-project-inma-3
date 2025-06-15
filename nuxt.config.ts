import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: [
        '~/assets/css/main.css',
        '~/assets/css/style.css'
    ],
    modules: ['@nuxt/ui', '@nuxt/content', '@vite-pwa/nuxt'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    pwa: {
        registerType: 'autoUpdate',
        workbox: {
            navigateFallback: '/',
            globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
        },
        client: {
            installPrompt: true,
        },
        manifest: {
            name: 'Allegro PWA App',
            short_name: 'Allegro',
            description: 'Aplikacja PWA dla Allegro',
            theme_color: '#ff5a00',
            background_color: '#ffffff',
            display: 'standalone',
            orientation: 'portrait',
            scope: '/',
            start_url: '/',
            categories: ['shopping', 'marketplace'],
            lang: 'pl',
            screenshots: [
                {
                    src: '/screenshots/desktop-1.png',
                    sizes: '1535x851',
                    type: 'image/png',
                    form_factor: 'wide',
                    label: 'Allegro - Główna strona'
                },
                {
                    src: '/screenshots/mobile-1.png',
                    sizes: '369x333',
                    type: 'image/png',
                    form_factor: 'narrow',
                    label: 'Allegro - Mobilna strona główna'
                },
                {
                    src: '/screenshots/mobile-2.png',
                    sizes: '369x333',
                    type: 'image/png',
                    form_factor: 'narrow',
                    label: 'Allegro - Lista produktów'
                }
            ],
            icons: [
                {
                    src: '/android/android-launchericon-192-192.png',
                    sizes: '192x192',
                    type: 'image/png',
                    purpose: 'any'
                },
                {
                    src: '/android/android-launchericon-512-512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any'
                },
                {
                    src: '/ios/180.png',
                    sizes: '180x180',
                    type: 'image/png',
                    purpose: 'any'
                }
            ]
        },
        devOptions: {
            enabled: true,
            type: 'module'
        }
    }
})