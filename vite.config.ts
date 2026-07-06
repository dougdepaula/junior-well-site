import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ command }) => ({
  tanstackStart: {
    server: { 
      entry: "src/server.ts",
      preset: "cloudflare-pages" 
    },
  },
  // O plugin só será injetado se o comando NÃO for o servidor local ('serve')
  plugins: command === 'serve' ? [] : [cloudflare()]
}));