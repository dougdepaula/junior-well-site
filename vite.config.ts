import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from 'fs';

export default defineConfig({
  // ... seu código atual
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      // Isso ajuda a limpar arquivos desnecessários após o build
      plugins: [{
        name: 'remove-redirects',
        closeBundle() {
          const path = 'dist/client/client/_redirects';
          if (fs.existsSync(path)) fs.unlinkSync(path);
        }
      }]
    }
  }
});