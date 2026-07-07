import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Isso diz ao framework para gerar um build estático em vez de um servidor
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'dist/client',
  }
});