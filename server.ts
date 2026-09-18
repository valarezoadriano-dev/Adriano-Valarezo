import express from "express";
import path from "path";
import fs from "fs"; // 1. Necesitamos 'fs' para leer el index.html en desarrollo
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ 
      status: "ok", 
      consultant: "Adriano Remigio Valarezo",
      timestamp: new Date().toISOString() 
    });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // 2. Cambiado a 'custom' para manejar el HTML manualmente
    });
    
    app.use(vite.middlewares);

    // 3. Manejador para servir index.html en desarrollo
    app.get("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        // Lee el index.html original
        let template = fs.readFileSync(
          path.resolve(process.cwd(), "index.html"),
          "utf-8"
        );
        
        // Aplica las transformaciones de Vite (HMR, inyección de scripts)
        template = await vite.transformIndexHtml(url, template);
        
        // Envía el HTML transformado
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });

  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Adriano Valarezo portal running on http://localhost:${PORT}`);
  });
}

startServer();
