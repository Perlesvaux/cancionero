import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',  

plugins: [react(),

VitePWA({
  //you MUST have these three in your './public' directory:
  //favicon.png, screenshot-wide.png, screenshot-narrow.png
  //Make sure dimensions are correct. Wrong dimensions may
  //trigger bug that requires you to delete browser history
      registerType: 'autoUpdate',
      includeAssets: [], // Add static (./public) assets. i.e.: 'vite.svg'
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,opus}'
        ],
      },
      devOptions:{enabled:true},
      manifest: {
        lang: 'es',
        display:'standalone',
        name: 'Parroquia San Francisco de Asís | Pastoral de la Salud - Cancionero',
        short_name:  'Cancionero',
        description: 'A simple React PWA built with Vite',
        theme_color: '#ffffff',
        icons: [
            {
              'src': '/favicon.png',
              'sizes': '192x192',
              'type': 'image/png'
            }],
        start_url: '/',
        screenshots: [
        {
          src: '/screenshot-narrow.png',
          sizes: '320x320',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'Narrow'
        },
        {
          src: '/screenshot-wide.png',
          sizes: '320x320',
          type: 'image/png',
          form_factor: 'wide',
          label: 'Wide'
        }
        ],
      },

    })


],
  
})
