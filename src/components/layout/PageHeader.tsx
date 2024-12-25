import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 mb-8">
      <button 
        onClick={() => navigate(-1)}
        className="p-2 hover:bg-background-secondary rounded-lg transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-text-secondary" />
      </button>
      <div>
        <h1 className="h1 text-text-primary">{title}</h1>
        {subtitle && <p className="body1 text-text-secondary mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};