import { useState, useEffect } from 'react';
import { Heart, Users, MapPin, Phone, Instagram, Download, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { icon: Users, value: '+1.000', label: 'Famílias Atendidas' },
    { icon: MapPin, value: '+7', label: 'Comunidades Assistidas' },
    { icon: Heart, value: '100%', label: 'Amor e Dedicação' }
  ];

  const carouselImages = [
    'https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/12203694/pexels-photo-12203694.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/34426679/pexels-photo-34426679.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/29462484/pexels-photo-29462484.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleContact = () => {
    window.open('https://wa.me/5531991331563', '_blank');
  };

  const handleDownload = () => {
    // Trigger download of the ficha.pdf file from the public folder
    const link = document.createElement('a');
    link.href = '/ficha.pdf';
    link.download = 'ficha.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Register favicon (yellow heart) from /public
  useEffect(() => {
    const existing = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    const link = existing ?? document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = '/favicon.svg';
    if (!existing) document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              PROJETO <span className="text-yellow-600">ÁGUIA SOCIAL</span> {/* was text-amber-600 */}
            </h1>
            <div className="flex gap-4">
              <button
                onClick={handleContact}
                className="hidden sm:flex items-center gap-2 bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-700 transition-all transform hover:scale-105"
              >
                {/* was bg-amber-600 hover:bg-amber-700 */}
                <Phone size={18} />
                Contato
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 via-yellow-100 to-white text-gray-800"> {/* was from-amber-50 via-orange-50 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Forjando <span className="text-yellow-600">Águias</span> Para o Futuro {/* was text-amber-600 */}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Distribuindo frutas, verduras e legumes para famílias que precisam.
                Transformando vidas através da solidariedade e do cuidado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleContact}
                  className="flex items-center justify-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  {/* was bg-amber-600 hover:bg-amber-700 */}
                  <Phone size={20} />
                  Entre em Contato
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 bg-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Download size={20} />
                  Ficha de Inscrição
                </button>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <Instagram className="text-yellow-600" size={24} /> {/* was text-amber-600 */}
                <a
                  href="https://instagram.com/emerson9669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  @emerson9669
                </a>
                <span className="text-gray-400">|</span>
                <MapPin className="text-yellow-600" size={20} /> {/* was text-amber-600 */}
                <span className="text-gray-600">Betim • Ibirité</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-yellow-100 rounded-3xl border-4 border-yellow-200 overflow-hidden shadow-2xl"> {/* was bg-amber-100 border-amber-200 */}
                <img
                  src="https://images.pexels.com/photos/35113948/pexels-photo-35113948.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Projeto Águia Social em ação"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-white p-6 rounded-2xl shadow-xl"> {/* was bg-amber-600 */}
                <p className="text-3xl font-bold">+1.000</p>
                <p className="font-semibold">Famílias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-200"> {/* was from-amber-100 to-orange-100 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all border-2 border-yellow-200"
              >
                <stat.icon className="w-12 h-12 text-yellow-600 mb-4" /> {/* was text-amber-600 */}
                <p className="text-4xl font-bold mb-2 text-yellow-600">{stat.value}</p> {/* was text-amber-600 */}
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Sobre o <span className="text-yellow-600">Projeto</span> {/* was text-amber-600 */}
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div> {/* was bg-amber-600 */}
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                O <strong>Projeto Águia Social</strong> nasceu do coração e da determinação de
                <strong> Emerson Paulo</strong>, que enxergou a necessidade de levar alimentos
                frescos e saudáveis para famílias em situação de vulnerabilidade.
              </p>
              <p>
                Com muito trabalho e dedicação, o projeto já atendeu mais de <strong>1.000 famílias</strong> em
                <strong> Ibirité</strong>, alcançando mais de <strong>7 comunidades</strong> nas regiões
                de Betim e Ibirité.
              </p>
              <p>
                Nossa missão é simples, mas poderosa: garantir que nenhuma família passe fome,
                oferecendo frutas, verduras e legumes com amor, dignidade e respeito.
              </p>
              <div className="bg-yellow-50 text-gray-800 p-6 rounded-xl border-l-4 border-yellow-600"> {/* was bg-amber-50 border-amber-600 */}
                <p className="font-semibold text-yellow-600 mb-2">Coordenador</p> {/* was text-amber-600 */}
                <p className="text-xl font-semibold">Emerson Paulo</p>
                <a
                  href="https://instagram.com/emerson9669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-3 text-yellow-600 hover:text-yellow-700 transition-colors"
                >
                  <Instagram size={20} />
                  @emerson9669
                </a>
              </div>
            </div>
            <div className="relative h-[500px]">
              <div className="absolute inset-0 bg-yellow-200/30 rounded-3xl transform rotate-3"></div> {/* was bg-amber-200/30 */}
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-200"> {/* was border-amber-200 */}
                <img
                  src="https://images.pexels.com/photos/3874021/pexels-photo-3874021.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Distribuição de alimentos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-600">Galeria</span> {/* was text-amber-600 */}
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div> {/* was bg-amber-600 */}
            <p className="text-lg text-gray-600">
              Momentos que registram nossa missão de transformar vidas
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-200"> {/* was border-amber-200 */}
              <img
                src={carouselImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-600 text-white p-3 rounded-full hover:bg-yellow-700 transition-all shadow-lg"
            >
              {/* was bg-amber-600 hover:bg-amber-700 */}
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-600 text-white p-3 rounded-full hover:bg-yellow-700 transition-all shadow-lg"
            >
              {/* was bg-amber-600 hover:bg-amber-700 */}
              <ChevronRight size={24} />
            </button>
            <div className="flex justify-center gap-2 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-yellow-600' : 'w-2 bg-gray-300' /* was bg-amber-600 */
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white"> {/* was from-amber-600 to-orange-600 */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Faça Parte Dessa <span className="text-white">Transformação</span>
          </h2>
          <p className="text-xl text-yellow-100 mb-8 leading-relaxed"> {/* was text-amber-100 */}
            Se você ou alguém que conhece precisa de apoio, entre em contato conosco.
            Estamos aqui para ajudar com dignidade e respeito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContact}
              className="flex items-center justify-center gap-2 bg-white text-amber-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone size={22} />
              (31) 99133-1563
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 bg-amber-100 text-amber-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-200 transition-all transform hover:scale-105 shadow-xl"
            >
              <Download size={22} />
              Baixar Ficha de Inscrição
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 border-t-2 border-yellow-600 py-8"> {/* was border-amber-600 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white font-bold text-xl">
                PROJETO <span className="text-yellow-400">ÁGUIA SOCIAL</span> {/* was text-amber-400 */}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Forjando águias para o futuro
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-yellow-400" /> {/* was text-amber-400 */}
                <span>Betim • Ibirité</span>
              </div>
              <a
                href="https://instagram.com/emerson9669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {/* was hover:text-amber-400 */}
                <Instagram size={18} />
                @emerson9669
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-500 text-sm">
            <p>© 2024 Projeto Águia Social. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
