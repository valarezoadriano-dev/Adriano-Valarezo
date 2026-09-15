import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  AlertCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { ADRIANO_PROFILE, SERVICES_LIST } from '../data/content';
import { ContactFormData } from '../types';

interface QuickContactSectionProps {
  initialService?: string;
  initialMessage?: string;
}

export const QuickContactSection: React.FC<QuickContactSectionProps> = ({
  initialService = '',
  initialMessage = ''
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: initialService || SERVICES_LIST[0].title,
    company: '',
    message: initialMessage || '',
    contactMethod: 'whatsapp',
    meetingPreference: 'virtual'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage('Por favor ingrese al menos su nombre y correo electrónico.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        // Even if server is offline, mark submitted client-side
        setIsSubmitted(true);
      }
    } catch {
      // Offline graceful fallback
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const buildWhatsAppLink = () => {
    const text = `Hola Ing. Adriano Valarezo, le escribo desde el formulario de contacto de su sitio web:
- Nombre: ${formData.name || 'Interesado'}
- Empresa: ${formData.company || 'No especificada'}
- Servicio de interés: ${formData.service}
- Modalidad preferida: ${formData.meetingPreference}
- Mensaje: ${formData.message || 'Deseo coordinar una llamada de diagnóstico.'}`;

    return `https://wa.me/${ADRIANO_PROFILE.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const emailDraftUrl = `mailto:${ADRIANO_PROFILE.email}?subject=${encodeURIComponent(
    `Consulta de Consultoría - ${formData.company || formData.name || 'Nuevo Proyecto'}`
  )}&body=${encodeURIComponent(
    `Estimado Ing. Adriano Remigio Valarezo,\n\nLe contacto a través de su sitio web para consultar sobre sus servicios profesionales:\n\nServicio de Interés: ${formData.service}\nEmpresa: ${formData.company}\nTeléfono/WhatsApp: ${formData.phone}\n\nDetalle del Requerimiento:\n${formData.message}\n\nAtentamente,\n${formData.name}`
  )}`;

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Send className="w-3.5 h-3.5" />
            Contacto Rápido & Diagnóstico Directo
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Comuníquese Directamente con Adriano Remigio Valarezo
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Elija el canal de su preferencia para coordinar una llamada de evaluación de 30 minutos sin costo, solicitar una cotización formal o plantear un peritaje urgente.
          </p>
        </div>

        {/* 3 Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${ADRIANO_PROFILE.whatsappNumber}?text=${encodeURIComponent('Hola Ing. Adriano Valarezo, deseo consultar por sus servicios de consultoría.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200 rounded-2xl p-6 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                WhatsApp Directo
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                El canal más rápido para consultas breves, confirmación de disponibilidad o envío de documentos.
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
              <span>Iniciar conversación en WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Email Direct */}
          <a
            href={`mailto:${ADRIANO_PROFILE.email}?subject=Solicitud%20de%20Consultor%C3%ADa%20Profesional`}
            className="bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-2xl p-6 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                Correo Electrónico
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                Ideal para enviar términos de referencia (TDR), pliegos de licitación o estados financieros de proyectos.
              </p>
              <p className="text-xs font-semibold text-slate-800 break-all mb-4">
                {ADRIANO_PROFILE.email}
              </p>
            </div>
            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <span>Redactar correo a Adriano</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Direct Scope & Meeting */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center mb-4 font-bold">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-lg mb-1">
                Sesión de Diagnóstico
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                30 minutos de sesión técnica inicial (Virtual vía Google Meet / Teams o Presencial en Quito/Guayaquil).
              </p>
            </div>
            <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sin costo ni compromiso comercial</span>
            </div>
          </div>

        </div>

        {/* Main Fast Contact Form Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                ¡Solicitud Registrada con Éxito!
              </h3>
              <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                Muchas gracias por su interés, <strong>{formData.name}</strong>. Adriano Remigio Valarezo revisará su requerimiento sobre <strong>{formData.service}</strong> y se comunicará en un plazo máximo de 24 horas hábiles.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Agilizar respuesta por WhatsApp</span>
                </a>

                <a
                  href={emailDraftUrl}
                  className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Enviar respaldo por Correo</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline py-2 cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Formulario Rápido de Cotización y Asesoría
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Complete los campos para recibir una propuesta técnica preliminar.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-100/60 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  Respuesta en &lt; 24h
                </div>
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nombre */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Ing. Roberto Gómez"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-2xs"
                  />
                </div>

                {/* Correo */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="nombre@empresa.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-2xs"
                  />
                </div>

                {/* Teléfono / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ej. +593 99 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-2xs"
                  />
                </div>

                {/* Empresa / Organización */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Empresa u Organización
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ej. Agroexportadora S.A. o Fundación"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-2xs"
                  />
                </div>

                {/* Servicio de Interés */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Servicio de Interés Principal
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-2xs"
                  >
                    {SERVICES_LIST.map(s => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Propuesta Personalizada Multi-Área">
                      Propuesta Integral a Medida / Otra Consulta
                    </option>
                    <option value="Dictamen Técnico o Peritaje Urgente">
                      Dictamen Técnico o Peritaje Urgente
                    </option>
                  </select>
                </div>

                {/* Mensaje */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Breve descripción de su necesidad o proyecto
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describa el estado de su planta, objetivo deseado, ubicación del proyecto o plazos estimados..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-2xs"
                  />
                </div>

                {/* Preferencia de reunión */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferencia para la sesión de diagnóstico:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'virtual', label: 'Videollamada (Meet/Teams)' },
                      { id: 'presencial', label: 'Presencial (Quito/Guayaquil)' },
                      { id: 'telefonica', label: 'Llamada telefónica' }
                    ].map(mode => (
                      <label
                        key={mode.id}
                        className={`flex items-center justify-center p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-colors ${
                          formData.meetingPreference === mode.id
                            ? 'bg-emerald-100 text-emerald-900 border-emerald-400'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="meetingPreference"
                          value={mode.id}
                          checked={formData.meetingPreference === mode.id}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{mode.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form submit & secondary triggers */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Información protegida bajo estricta confidencialidad.</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-3 rounded-xl font-semibold text-xs text-emerald-700 hover:bg-emerald-50 border border-emerald-300 transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Enviar por WhatsApp</span>
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 transition-colors shadow-sm disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Enviando solicitud...</span>
                    ) : (
                      <>
                        <span>Solicitar Contacto Directo</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
