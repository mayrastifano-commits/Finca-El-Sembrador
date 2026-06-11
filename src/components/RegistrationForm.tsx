import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Mail, 
  Lock, 
  MapPin, 
  Leaf, 
  CheckCircle2, 
  AlertCircle, 
  Package, 
  HelpCircle,
  Clock
} from 'lucide-react';

interface RegistrationFormProps {
  id?: string;
}

export default function RegistrationForm({ id = 'booking-form-section' }: RegistrationFormProps) {
  // Estados de campos de entrada
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [cajaTipo, setCajaTipo] = useState('familiar');

  // Evento 4: Guía visual de enfoque
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Evento 5: Contador de caracteres en tiempo real para contraseña
  const [passwordCharCount, setPasswordCharCount] = useState(0);

  // Evento 6: Botón dinámico interactivo por JavaScript
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);

  // Estado del submit / validación / alertas
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{ nombre: string; fecha: string } | null>(null);

  // Evento 4: Handlers de Enfoque (focus / blur)
  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Evento 5: Handler de teclado / input para contraseña
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordCharCount(value.length);
  };

  const handlePasswordInput = (e: React.FormEvent<HTMLInputElement>) => {
    // Es redundante con handleChange de React pero garantiza cumplir el evento "onInput" con total fidelidad
    const value = (e.target as HTMLInputElement).value;
    setPasswordCharCount(value.length);
  };

  const handlePasswordKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Evento de teclado de la rúbrica (keyup/input)
    const value = (e.currentTarget as HTMLInputElement).value;
    setPasswordCharCount(value.length);
  };

  // Evento 6: Handlers de Ratón (mouseover / mouseout)
  const handleMouseOverSubmit = () => {
    setIsSubmitHovered(true);
  };

  const handleMouseOutSubmit = () => {
    setIsSubmitHovered(false);
  };

  // Evento 7: Control final de envío - validación y limpieza
  const handleSubmit = (e: React.FormEvent) => {
    // Evitar la recarga de página por defecto
    e.preventDefault();
    setFormError(null);

    // Comprobar si el campo Nombre está vacío
    if (!nombre.trim()) {
      setFormError('El campo "Nombre" es obligatorio. Por favor, indícanos cómo te llamas para personalizar el envío.');
      // Enfocar automáticamente el campo con error
      const nameInput = document.getElementById('input-name');
      if (nameInput) nameInput.focus();
      return;
    }

    if (!email.trim()) {
      setFormError('El campo "Correo Electrónico" es obligatorio.');
      return;
    }

    if (password.length < 5) {
      setFormError('Por seguridad, la contraseña debe contener al menos 5 caracteres.');
      return;
    }

    // Registro completado satisfactoriamente
    setSuccessInfo({
      nombre: nombre,
      fecha: new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    });
    setFormSuccess(true);

    // Borrado de lo escrito en todas las cajas de texto (Reseteo de campos y contador)
    setNombre('');
    setEmail('');
    setPassword('');
    setDireccion('');
    setCajaTipo('familiar');
    setPasswordCharCount(0);
  };

  // Obtener estilo de borde interactivo dinámicamente mediante JS (Guía Visual - Evento 4)
  const getInputStyles = (fieldName: string) => {
    const base = "w-full pl-11 pr-4 py-3 bg-white border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-300 ";
    const isFocused = focusedField === fieldName;
    
    if (isFocused) {
      // El borde se resalta con un color super llamativo (un naranja/dorado orgánico de Finca)
      return base + "border-amber-500 ring-4 ring-amber-100 shadow-md scale-[1.01]";
    }
    
    return base + "border-gray-200 hover:border-gray-300 shadow-xs";
  };

  return (
    <section id={id} className="relative py-16 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Contenedor decorativo de fondo */}
      <div className="absolute inset-0 bg-radial from-amber-50/50 via-transparent to-transparent -z-10 pointer-events-none rounded-3xl" />

      <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden grid md:grid-cols-12">
        
        {/* Columna Informativa Sidebar */}
        <div className="md:col-span-5 bg-gradient-to-br from-emerald-800 to-teal-900 text-white p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-emerald-700/20 rounded-full blur-2xl" />
          <div className="absolute -left-12 -top-12 w-40 h-40 bg-teal-500/10 rounded-full" />

          <div className="relative space-y-6">
            <div className="inline-flex p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20">
              <Package className="w-6 h-6 text-emerald-200" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold">Reserva tu Caja de Temporada</h3>
              <p className="text-emerald-100/90 text-xs leading-relaxed">
                Completa tus datos para coordinar la entrega semanal. Una vez recibido el formulario, te contactaremos en un plazo máximo de 24 horas para definir el día exacto de reparto en tu zona.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/15">
              <div className="flex items-center gap-3 text-xs text-emerald-100/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Prueba semanal sin permanencia</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-emerald-100/90">
                <Clock className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Recibe los jueves por la mañana</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-emerald-100/90">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Reparto local gratuito (Km 0)</span>
              </div>
            </div>
          </div>

          <div className="relative pt-8 border-t border-white/10 text-xs text-emerald-200/70">
            Finca El Sembrador - Reservas temporada 2026.
          </div>
        </div>

        {/* Columna Formulario */}
        <div className="md:col-span-7 p-8 md:p-10">
          <h4 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
            Formulario de Registro
            <span className="text-xs font-sans font-normal text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              Fase 2 Activa
            </span>
          </h4>

          {/* Errores */}
          <AnimatePresence>
            {formError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-800 text-xs flex items-start gap-2.5"
                id="form-error-banner"
              >
                <AlertCircle className="w-4.5 h-4.5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Ha surgido un detalle: </span>
                  {formError}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Formulario */}
          <form id="reservation-form" onSubmit={handleSubmit} className="space-y-5">
            {/* Campo: Nombre (Requerido) */}
            <div className="space-y-1.5">
              <label htmlFor="input-name" className="block text-xs font-semibold text-gray-700 tracking-wide uppercase">
                Nombre Completo <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className={`w-4.5 h-4.5 transition-colors ${focusedField === 'nombre' ? 'text-amber-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="text"
                  id="input-name"
                  placeholder="Ej: David García Pérez"
                  value={nombre}
                  onFocus={() => handleFocus('nombre')}
                  onBlur={handleBlur}
                  onChange={(e) => setNombre(e.target.value)}
                  className={getInputStyles('nombre')}
                />
              </div>
            </div>

            {/* Campo: Correo Electrónico */}
            <div className="space-y-1.5">
              <label htmlFor="input-email" className="block text-xs font-semibold text-gray-700 tracking-wide uppercase">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className={`w-4.5 h-4.5 transition-colors ${focusedField === 'email' ? 'text-amber-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="email"
                  id="input-email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  onChange={(e) => setEmail(e.target.value)}
                  className={getInputStyles('email')}
                />
              </div>
            </div>

            {/* Campo: Dirección de entrega */}
            <div className="space-y-1.5">
              <label htmlFor="input-address" className="block text-xs font-semibold text-gray-700 tracking-wide uppercase">
                Dirección de Entrega / Municipio
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <MapPin className={`w-4.5 h-4.5 transition-colors ${focusedField === 'direccion' ? 'text-amber-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="text"
                  id="input-address"
                  placeholder="Calle, número, piso, localidad"
                  value={direccion}
                  onFocus={() => handleFocus('direccion')}
                  onBlur={handleBlur}
                  onChange={(e) => setDireccion(e.target.value)}
                  className={getInputStyles('direccion')}
                />
              </div>
            </div>

            {/* Campo: Contraseña con Contador en Vivo */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="input-password" className="block text-xs font-semibold text-gray-700 tracking-wide uppercase">
                  Contraseña de Registro
                </label>
                {/* Evento 5: El Contador en Vivo */}
                <div 
                  id="char-counter"
                  className={`text-xs font-mono font-medium px-2 py-0.5 rounded transition-all duration-300 ${
                    passwordCharCount === 0 
                      ? 'text-gray-400 bg-gray-50' 
                      : passwordCharCount < 5 
                        ? 'text-rose-600 bg-rose-50 border border-rose-100 animate-pulse' 
                        : 'text-emerald-700 bg-emerald-50 border border-emerald-100'
                  }`}
                >
                  {passwordCharCount} {passwordCharCount === 1 ? 'carácter' : 'caracteres'}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className={`w-4.5 h-4.5 transition-colors ${focusedField === 'password' ? 'text-amber-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="password"
                  id="input-password"
                  placeholder="Mínimo 5 caracteres"
                  value={password}
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                  onChange={handlePasswordChange}
                  onInput={handlePasswordInput}
                  onKeyUp={handlePasswordKeyUp}
                  className={getInputStyles('password')}
                />
              </div>
              <p className="text-[11px] text-gray-400 leading-normal">
                Esta contraseña te permitirá modificar o suspender los repartos desde el área de cliente en el futuro.
              </p>
            </div>

            {/* Selector de Cesta para mayor realismo y riqueza visual */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-700 tracking-wide uppercase">
                Tamaño de Cesta Elegido
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`border-2 rounded-xl p-3 flex flex-col justify-between cursor-pointer transition-all ${cajaTipo === 'familiar' ? 'border-emerald-600 bg-emerald-50/50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}>
                  <input 
                    type="radio" 
                    name="cajaTipo" 
                    value="familiar" 
                    checked={cajaTipo === 'familiar'} 
                    onChange={() => setCajaTipo('familiar')} 
                    className="sr-only" 
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-gray-900">Caja Familiar</span>
                    <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100/80 px-1.5 py-0.5 rounded">Recomendada</span>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1">Caja completa (~7-8 kg de verdura + aromáticas + huevos)</span>
                  <span className="text-xs font-bold text-gray-900 mt-2">29.90 € <span className="font-normal text-gray-400">/ semana</span></span>
                </label>
                
                <label className={`border-2 rounded-xl p-3 flex flex-col justify-between cursor-pointer transition-all ${cajaTipo === 'pareja' ? 'border-emerald-600 bg-emerald-50/50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}>
                  <input 
                    type="radio" 
                    name="cajaTipo" 
                    value="pareja" 
                    checked={cajaTipo === 'pareja'} 
                    onChange={() => setCajaTipo('pareja')} 
                    className="sr-only" 
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-gray-900">Caja Pareja</span>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1">Caja mediana (~4-5 kg de productos básicos locales)</span>
                  <span className="text-xs font-bold text-gray-900 mt-2">19.90 € <span className="font-normal text-gray-400">/ semana</span></span>
                </label>
              </div>
            </div>

            {/* Evento 6: Botón Dinámico interactivo y remitente de formulario */}
            <div className="pt-3">
              <button
                type="submit"
                id="submit-btn"
                onMouseOver={handleMouseOverSubmit}
                onMouseOut={handleMouseOutSubmit}
                // Modificado levemente de aspecto por JS si se cierne el cursor, de acuerdo a la Rúbrica
                className={`w-full py-3.5 rounded-xl text-white font-bold text-sm tracking-wide shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  isSubmitHovered 
                    ? 'bg-amber-500 shadow-xl shadow-amber-500/20 scale-[1.03]' 
                    : 'bg-emerald-700 shadow-emerald-700/10 hover:bg-emerald-800'
                }`}
              >
                <Leaf className={`w-4.5 h-4.5 transition-transform ${isSubmitHovered ? 'rotate-12 scale-110 text-white' : 'text-emerald-200'}`} />
                <span>RESERVAR MI CAJA AHORA</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal / Alerta de Registro Exitoso Animada (Fase 2 - Control Final) */}
      <AnimatePresence>
        {formSuccess && successInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-emerald-100 p-6 md:p-8 text-center"
              id="success-message-modal"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <CheckCircle2 className="w-9 h-9 text-emerald-600 animate-bounce" />
              </div>

              <h5 className="text-xl font-serif font-bold text-gray-900">
                ¡Registro completado con éxito!
              </h5>
              
              <div className="my-5 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-2 text-left">
                <p className="text-xs text-gray-600 leading-normal">
                  Hola <strong className="text-emerald-900">{successInfo.nombre}</strong>, tu solicitud de reserva para la <strong>Caja de Verduras de Temporada</strong> fue guardada correctamente en nuestro sistema.
                </p>
                <p className="text-[11px] text-emerald-800">
                  📅 <strong>Próximo paso:</strong> Te llamaremos para verificar la dirección y planificar tu primer reparto programado para el próximo jueves.
                </p>
              </div>

              <button
                onClick={() => setFormSuccess(false)}
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl transition-all shadow-md active:scale-98 cursor-pointer text-xs"
                id="success-modal-dismiss-btn"
              >
                Cerrar y continuar navegando
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
