import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Remova ou comente o bloco abaixo para desabilitar o SSR:
  /*
  tanstackStart: {
    server: { 
      entry: "src/server.ts",
      preset: "cloudflare-pages" 
    },
  }
  */
});