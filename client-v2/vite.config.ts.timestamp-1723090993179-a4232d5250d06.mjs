// vite.config.ts
import react from "file:///E:/workspaces/Freelancers/cars/client-v2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///E:/workspaces/Freelancers/cars/client-v2/node_modules/vite/dist/node/index.js";
import { createHtmlPlugin } from "file:///E:/workspaces/Freelancers/cars/client-v2/node_modules/vite-plugin-html/dist/index.mjs";
var vite_config_default = defineConfig({
  base: process.env.VITE_BASE_URL,
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          baseUrl: process.env.VITE_BASE_URL
        }
      }
    })
  ],
  // alias config
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx3b3Jrc3BhY2VzXFxcXEZyZWVsYW5jZXJzXFxcXGNhcnNcXFxcY2xpZW50LXYyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFx3b3Jrc3BhY2VzXFxcXEZyZWVsYW5jZXJzXFxcXGNhcnNcXFxcY2xpZW50LXYyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi93b3Jrc3BhY2VzL0ZyZWVsYW5jZXJzL2NhcnMvY2xpZW50LXYyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0YmFzZTogcHJvY2Vzcy5lbnYuVklURV9CQVNFX1VSTCxcblx0cGx1Z2luczogW1xuXHRcdHJlYWN0KCksXG5cdFx0Y3JlYXRlSHRtbFBsdWdpbih7XG5cdFx0XHRpbmplY3Q6IHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGJhc2VVcmw6IHByb2Nlc3MuZW52LlZJVEVfQkFTRV9VUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRdLFxuXHQvLyBhbGlhcyBjb25maWdcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQCc6ICcvc3JjJyxcblx0XHR9LFxuXHR9LFxuXHRidWlsZDoge1xuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdGlucHV0OiB7XG5cdFx0XHRcdG1haW46ICcuL2luZGV4Lmh0bWwnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9ULE9BQU8sV0FBVztBQUN0VSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHdCQUF3QjtBQUdqQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixNQUFNLFFBQVEsSUFBSTtBQUFBLEVBQ2xCLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLGlCQUFpQjtBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNQLE1BQU07QUFBQSxVQUNMLFNBQVMsUUFBUSxJQUFJO0FBQUEsUUFDdEI7QUFBQSxNQUNEO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDTjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLGVBQWU7QUFBQSxNQUNkLE9BQU87QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNQO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
