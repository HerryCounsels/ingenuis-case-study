import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Star, Clock } from 'lucide-react';
import type { Program } from '../../types/programs';

export const ProgramCard = ({ title, category, students, rating, duration, image }: Program) => {
  const programUrl = `/programs/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
          {category}
        </span>
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        <Link 
          to={programUrl}
          className="mt-6 block w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center"
        >
          View Program
        </Link>
      </div>
    </div>
  );
};