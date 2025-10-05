import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da Secretaria */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Secretaria de Cultura</h3>
            <p className="text-gray-300 mb-4">
              Promovendo e preservando a cultura de Moreno - PE, 
              conectando a comunidade através das artes e tradições locais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/eventos" className="text-gray-300 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="/galeria" className="text-gray-300 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="/noticias" className="text-gray-300 hover:text-white transition-colors">Notícias</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Praça da Matriz, Centro<br />Moreno - PE, 54800-000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">(81) 3533-1234</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">cultura@moreno.pe.gov.br</span>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-blue-400" />
                <div>
                  <p className="text-gray-300">Segunda a Sexta</p>
                  <p className="text-gray-300">8h às 17h</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-blue-400" />
                <div>
                  <p className="text-gray-300">Sábado</p>
                  <p className="text-gray-300">8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Secretaria de Cultura de Moreno - PE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
