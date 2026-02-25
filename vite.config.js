import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const hfToken = env.HF_TOKEN;

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api/hf": {
          target: "https://router.huggingface.co",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/hf/, "/v1/chat/completions"),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              if (hfToken) {
                proxyReq.setHeader("Authorization", `Bearer ${hfToken}`);
              }
            });
          },
        },
      },
    },
  };
});
