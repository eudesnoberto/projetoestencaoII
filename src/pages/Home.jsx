import { Link } from 'react-router-dom';
import { Calendar, Image, Newspaper, ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { events } from '../data/events';
import { news } from '../data/news';

const Home = () => {
  const featuredEvents = events.filter(event => event.featured).slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cultura Viva em Moreno
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Descubra eventos, exposições e manifestações culturais que enriquecem nossa comunidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/eventos"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Calendar className="mr-2" size={20} />
              Ver Eventos
            </Link>
            <Link
              to="/galeria"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              <Image className="mr-2" size={20} />
              Galeria
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eventos em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Não perca os principais eventos culturais de Moreno
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <Calendar size={48} className="text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-500 mr-1" size={16} />
                    <span className="text-sm font-semibold text-blue-600">Destaque</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      {new Date(event.date).toLocaleDateString('pt-BR')} às {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">{event.price}</span>
                    <Link
                      to="/eventos"
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                    >
                      Saiba mais <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/eventos"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Ver Todos os Eventos <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Últimas Notícias
            </h2>
            <p className="text-xl text-gray-600">
              Fique por dentro das novidades da Secretaria de Cultura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <Newspaper size={48} className="text-white" />
                </div>
                <div className="p-6">
                  {article.featured && (
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-500 mr-1" size={16} />
                      <span className="text-sm font-semibold text-green-600">Destaque</span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock size={16} className="mr-2" />
                    {new Date(article.date).toLocaleDateString('pt-BR')}
                  </div>

                  <Link
                    to="/noticias"
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                  >
                    Ler mais <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/noticias"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              Ver Todas as Notícias <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Participe da Nossa Comunidade Cultural
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a nós e faça parte da rica tradição cultural de Moreno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Entre em Contato
            </Link>
            <Link
              to="/eventos"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Próximos Eventos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
