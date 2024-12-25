import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Search, Book, MessageCircle, FileText, Mail } from 'lucide-react';

const helpCategories = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'Learn the basics of using our platform',
    articles: [
      'Platform Overview',
      'Creating Your First Course',
      'Managing Students'
    ]
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Detailed guides and API references',
    articles: [
      'API Documentation',
      'Integration Guides',
      'Best Practices'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Community',
    description: 'Connect with other educators',
    articles: [
      'Discussion Forums',
      'Feature Requests',
      'Success Stories'
    ]
  }
];

export const Help = () => {
  return (
    <div className="p-8">
      <PageHeader 
        title="Help Center" 
        subtitle="Find answers and support for your questions"
      />

      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help articles..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {helpCategories.map(({ icon: Icon, title, description, articles }) => (
          <div key={title} className="bg-white rounded-xl shadow-sm p-6">
            <Icon className="w-8 h-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="space-y-2">
              {articles.map(article => (
                <li key={article}>
                  <a href="#" className="text-primary hover:underline">{article}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
        <p className="text-gray-600 mb-6">Our support team is available 24/7 to assist you</p>
        <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <Mail className="w-5 h-5 mr-2" />
          Contact Support
        </button>
      </div>
    </div>
  );
};