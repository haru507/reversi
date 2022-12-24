import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import react from "@vitejs/plugin-react";
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [
    react(),
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 100 })
  ],
})
