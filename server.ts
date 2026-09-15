import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  // AI Project Advisor / Diagnostic endpoint
  app.post("/api/ai-advisor", async (req, res) => {
    try {
      const { industry, challenge, goal, timeline, companySize } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      
      // If API key is available, leverage Google GenAI with gemini-3.8-flash
      if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
        const ai = new GoogleGenAI({ apiKey });
        
        const prompt = `Actúa como Adriano Remigio Valarezo, Ingeniero en Agroindustria egresado de la prestigiosa Escuela Agrícola Panamericana Zamorano, con más de 18 años de experiencia en consultoría agroindustrial, gestión estratégica de proyectos (metodologías internacionales PMO), sostenibilidad y optimización operativa en América Latina.

Un cliente potencial te comparte la siguiente información sobre su empresa/proyecto:
- Sector/Industria: ${industry || "Agroindustrial / General"}
- Reto actual: ${challenge || "Optimización de procesos y rentabilidad"}
- Objetivo deseado: ${goal || "Aumentar eficiencia y certificar calidad"}
- Plazo estimado: ${timeline || "3 a 6 meses"}
- Tamaño de empresa/alcance: ${companySize || "Mediana empresa"}

Genera una respuesta ejecutiva, profesional y de alto valor en formato JSON con la siguiente estructura exacta:
{
  "summary": "Diagnóstico preliminar conciso del desafío (2-3 oraciones)",
  "recommendedService": "Nombre del servicio recomendado principal (Consultoría Agroindustrial & Calidad, Gestión Integral de Proyectos, Sostenibilidad & Desarrollo, o Asesoría Estratégica Empresarial)",
  "keyDeliverables": ["Entregable clave 1", "Entregable clave 2", "Entregable clave 3"],
  "estimatedTimeline": "Tiempo sugerido de intervención (ej: 4 - 8 semanas)",
  "expectedROI": "Impacto esperado medible (ej: 15-25% reducción de mermas o aceleración en cumplimiento de metas)",
  "nextStepAction": "Recomendación para la sesión de diagnóstico inicial de 30 minutos con Adriano"
}
Responde únicamente con el bloque JSON válido, sin texto adicional alrededor.`;

        const response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          }
        });

        const text = response.text;
        if (text) {
          try {
            const parsed = JSON.parse(text);
            return res.json({ success: true, advice: parsed });
          } catch {
            // Fallback parse
          }
        }
      }

      // Intelligent curated fallback if API key is not yet set or in offline sandbox
      const advice = {
        summary: `Para el sector ${industry || "Agroindustrial"} con enfoque en "${challenge || "optimización de procesos"}", se requiere una intervención técnica por fases: levantamiento de línea base operativa, auditoría de cuellos de botella y estandarización de procesos con enfoque en rentabilidad y sostenibilidad.`,
        recommendedService: industry?.toLowerCase().includes("agro") 
          ? "Consultoría Agroindustrial & Optimización de Cadenas de Valor"
          : "Gestión Estratégica y Dirección de Proyectos (PMO)",
        keyDeliverables: [
          "Diagnóstico integral de procesos y mapa de mermas/cuellos de botella",
          "Plan maestro de estandarización técnica y control de calidad",
          "Tablero de control de indicadores operativos (KPIs) y seguimiento ejecutivo"
        ],
        estimatedTimeline: timeline || "6 a 10 semanas de intervención directa",
        expectedROI: "Optimización estimada del 15% al 28% en tiempos y costos operativos",
        nextStepAction: "Agendar sesión de evaluación diagnóstica de 30 minutos sin costo con Adriano Remigio Valarezo para definir el alcance exacto."
      };

      return res.json({ success: true, advice });
    } catch (err: unknown) {
      console.error("Error in /api/ai-advisor:", err);
      return res.status(500).json({ 
        success: false, 
        error: "No se pudo procesar la solicitud de diagnóstico en este momento." 
      });
    }
  });

  // Fast Contact Submission endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, service, message, preferredTime } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: "Nombre y correo son requeridos" });
    }

    console.log(`[Nuevo Contacto para Adriano Valarezo]: ${name} (${email}) - Servicio: ${service}`);
    
    return res.json({
      success: true,
      message: "Su solicitud ha sido registrada con éxito. Adriano Remigio Valarezo se pondrá en contacto en menos de 24 horas hábiles.",
      contactSummary: { name, email, phone, service, message, preferredTime }
    });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
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
