import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Expose Supabase env vars that use the NEXT_PUBLIC_ prefix to client code
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
