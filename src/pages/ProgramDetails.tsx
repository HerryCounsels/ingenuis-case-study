import React from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { Play, Book, Clock, Users, Star } from 'lucide-react';
import { programs } from '../data/programsData';

export const ProgramDetails = () => {
  const { id } = useParams();
  const program = programs.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === id);

  if (!program) return <div>Program not found</div>;

  return (
    <div className="p-8">
      <PageHeader title={program.title} subtitle={`${program.duration} • ${program.category}`} />
      
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img src={program.image} alt={program.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{program.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{program.rating}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                  <Play className="w-4 h-4" />
                  Start Learning
                </button>
              </div>

              <h2 className="text-xl font-semibold mb-4">About this program</h2>
              <p className="text-gray-600">
                This comprehensive program covers everything you need to know about {program.title.toLowerCase()}. 
                Perfect for both beginners and intermediate learners looking to advance their skills.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Course Outline</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((module) => (
                <div key={module} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Module {module}</h3>
                  <div className="space-y-2">
                    {[1, 2, 3].map((lesson) => (
                      <div key={lesson} className="flex items-center gap-3 text-gray-600">
                        <Book className="w-4 h-4" />
                        <span>Lesson {lesson}</span>
                        <span className="ml-auto flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>15 mins</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">What you'll learn</h2>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span className="text-gray-600">Learning objective {item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                Course Materials
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                Discussion Forum
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};