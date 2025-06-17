import React, { useState } from 'react';
import { 
  Heart, 
  Smartphone, 
  Calendar, 
  Shield, 
  CheckCircle, 
  Clock, 
  User, 
  Mail, 
  Phone,
  ArrowRight,
  Pill,
  Bell
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('¡Gracias por registrarte! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Yanapay</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Beneficios</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">Cómo Funciona</a>
              <a href="#registro" className="text-gray-700 hover:text-blue-600 transition-colors">Registro</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Pill className="h-4 w-4" />
              <span>Nunca más olvides tus medicamentos</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tu salud es nuestra
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> prioridad</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Yanapay te ayuda a mantener el control de tus medicamentos con recordatorios personalizados 
              enviados directamente a tu celular. Nunca más te olvides de una dosis importante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#registro" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>Registrarme Ahora</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Ver Cómo Funciona
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Yanapay?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre cómo Yanapay puede transformar la manera en que manejas tus medicamentos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recordatorios SMS</h3>
              <p className="text-gray-600 leading-relaxed">
                Recibe mensajes de texto en tu celular recordándote cuándo y cómo tomar cada medicamento.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-teal-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Horarios Personalizados</h3>
              <p className="text-gray-600 leading-relaxed">
                Configura recordatorios según los horarios específicos recetados por tu médico.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Información Segura</h3>
              <p className="text-gray-600 leading-relaxed">
                Tus datos médicos están protegidos con los más altos estándares de seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cómo usar Yanapay
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En solo 3 pasos simples, tendrás configurados tus recordatorios médicos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  1
                </div>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regístrate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Completa el formulario con tu información básica: nombre, correo y número de celular.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  2
                </div>
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Configura</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro equipo te contactará para configurar tus medicamentos y horarios específicos.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  3
                </div>
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Bell className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recibe Recordatorios</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comienza a recibir recordatorios personalizados en tu celular según tu prescripción médica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registro" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Únete a Yanapay hoy mismo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Completa el formulario y comienza a cuidar tu salud de manera más efectiva
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Ingresa tu nombre completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Número de Celular *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-800">
                    Al registrarte, aceptas que nuestro equipo médico se ponga en contacto contigo 
                    para configurar tus recordatorios personalizados. Tu información está protegida 
                    bajo nuestras políticas de privacidad.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Registrarme en Yanapay</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Yanapay</span>
            </div>
            <p className="text-gray-400 mb-6">
              Cuidando tu salud, un recordatorio a la vez
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Contacto</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                © 2024 Yanapay. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;