import { useState } from 'react';
import { Calendar, User, Star, ArrowRight, Search, Filter } from 'lucide-react';
import { news } from '../data/news';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFeatured, setShowFeatured] = useState(false);

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = showFeatured ? article.featured : true;
    return matchesSearch && matchesFeatured;
  });

  const featuredNews = news.filter(article => article.featured);
  const regularNews = news.filter(article => !article.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Notícias e Novidades
          </h1>
          <p className="text-xl text-purple-100">
            Fique por dentro das últimas notícias da Secretaria de Cultura
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar notícias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showFeatured}
                  onChange={(e) => setShowFeatured(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-gray-700">Apenas destaques</span>
              </label>
            </div>
          </div>
        </div>

        {/* Featured News */}
        {!showFeatured && featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Star className="text-yellow-500 mr-2" size={24} />
              Notícias em Destaque
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                    <Calendar size={48} className="text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-500 mr-1" size={16} />
                      <span className="text-sm font-semibold text-yellow-600">Destaque</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {article.author}
                      </div>
                    </div>

                    <button className="text-purple-600 hover:text-purple-800 font-semibold flex items-center">
                      Ler mais <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {showFeatured ? 'Notícias em Destaque' : 'Todas as Notícias'}
          </h2>
          
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                    <Calendar size={48} className="text-white" />
                  </div>
                  <div className="p-6">
                    {article.featured && (
                      <div className="flex items-center mb-2">
                        <Star className="text-yellow-500 mr-1" size={16} />
                        <span className="text-sm font-semibold text-yellow-600">Destaque</span>
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {article.author}
                      </div>
                    </div>

                    <button className="text-purple-600 hover:text-purple-800 font-semibold flex items-center text-sm">
                      Ler mais <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Filter size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhuma notícia encontrada
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros ou termo de busca para encontrar notícias.
              </p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Receba nossas notícias por email
          </h3>
          <p className="text-purple-100 mb-6">
            Fique sempre atualizado com as últimas novidades da Secretaria de Cultura
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
