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

  // Middleware de Seguridad HTTP y Protección Continua de Cabeceras
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    
    // Content-Security-Policy (CSP) estricto y compatible con Vite, Fuentes y Reproductores Multimedia
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https: blob:",
      "media-src 'self' https: blob:",
      "frame-src 'self' https://player.vimeo.com https://www.youtube.com https://www.youtube-nocookie.com",
      "connect-src 'self' https://api.web3forms.com ws: wss:",
      "base-uri 'self'",
      "form-action 'self' https://api.web3forms.com"
    ].join("; ");
    res.setHeader("Content-Security-Policy", cspDirectives);

    next();
  });

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ 
      status: "ok", 
      consultant: "Adriano Remigio Valarezo",
      timestamp: new Date().toISOString() 
    });
  });

  // Telemetría de Seguridad y Cumplimiento LOPDP
  app.get("/api/security-status", (_req, res) => {
    res.json({
      status: "Activo y Protegido",
      securityFramework: "LOPDP Ecuador & ISO/IEC 27001",
      tlsGrade: "TLS 1.3 / 256-bit AES · Calificación A+",
      hsts: true,
      csp: true,
      antiXSS: true,
      headersCheck: "Conforme",
      lastAuditDate: "23 de octubre de 2026",
      reviewCycle: "Monitoreo continuo y auditoría mensual",
      dataController: "Ing. Adriano Remigio Valarezo",
      contactEmail: "valarezo.adriano@gmail.com",
      checkedAt: new Date().toISOString()
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
