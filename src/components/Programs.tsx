import React from 'react';
import { BookOpen, Users, Star, Clock } from 'lucide-react';

const programs = [
  {
    title: 'Full-Stack Web Development',
    category: 'Programming',
    students: 324,
    rating: 4.8,
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'UI/UX Design Masterclass',
    category: 'Design',
    students: 256,
    rating: 4.9,
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Home DIY Essentials',
    category: 'DIY',
    students: 189,
    rating: 4.7,
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Professional Tennis Training',
    category: 'Sports',
    students: 145,
    rating: 4.6,
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Workplace Leadership',
    category: 'Workplace',
    students: 278,
    rating: 4.8,
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80'
  }
];

const Programs = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Available Programs</h1>
        <div className="flex space-x-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>All Categories</option>
            <option>Programming</option>
            <option>Design</option>
            <option>DIY</option>
            <option>Sports</option>
            <option>Workplace</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>Sort by Popular</option>
            <option>Sort by Newest</option>
            <option>Sort by Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div key={program.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                {program.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{program.title}</h3>
              
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{program.students} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{program.rating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                View Program
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;