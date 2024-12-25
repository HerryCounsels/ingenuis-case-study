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
import { Logo } from '../shared/Logo';

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

export const Sidebar = () => {
  const location = useLocation();

  const MenuItem = ({ icon: Icon, label, path }: any) => (
    <Link
      to={path}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        location.pathname === path
          ? 'bg-primary/10 text-primary'
          : 'text-text-primary hover:bg-background-secondary'
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="body2">{label}</span>
    </Link>
  );

  return (
    <div className="w-64 h-screen bg-background-primary border-r border-border flex flex-col">
      <div className="p-6">
        <Logo />
      </div>
      
      <div className="flex-1 px-3 py-4 space-y-2">
        {topMenuItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </div>

      <div className="px-3 py-4 space-y-2 border-t border-border">
        {bottomMenuItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};