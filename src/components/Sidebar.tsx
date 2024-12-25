import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  BookOpen, 
  PenTool, 
  Users, 
  Zap, 
  Code2, 
  HelpCircle, 
  UserCircle 
} from 'lucide-react';

const topMenuItems = [
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: BookOpen, label: 'Programs', path: '/programs' },
  { icon: PenTool, label: 'Course Studio', path: '/course-studio' },
  { icon: Users, label: 'Users', path: '/users' },
];

const bottomMenuItems = [
  { icon: Zap, label: 'Upgrade', path: '/upgrade' },
  { icon: Code2, label: 'API', path: '/api' },
  { icon: HelpCircle, label: 'Help', path: '/help' },
  { icon: UserCircle, label: 'Account', path: '/account' },
];

const Sidebar = () => {
  const location = useLocation();

  const MenuItem = ({ icon: Icon, label, path }: any) => (
    <Link
      to={path}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        location.pathname === path
          ? 'bg-indigo-100 text-indigo-600'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </Link>
  );

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">LearnHub</h1>
      </div>
      
      <div className="flex-1 px-3 py-4 space-y-2">
        {topMenuItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </div>

      <div className="px-3 py-4 space-y-2 border-t">
        {bottomMenuItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;