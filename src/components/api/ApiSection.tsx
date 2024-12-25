import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ApiSectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export const ApiSection = ({ icon: Icon, title, children }: ApiSectionProps) => {
  return (
    <div className="border-b border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
};