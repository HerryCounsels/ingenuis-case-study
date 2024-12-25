import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  icon?: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ 
  variant, 
  icon: Icon, 
  children, 
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = 'h-[60px] w-[174px] flex items-center justify-center gap-2 rounded-lg transition-colors';
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-[#1F1E1E] hover:bg-secondary/90'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon size={24} className={variant === 'primary' ? 'text-white' : 'text-[#1F1E1E]'} />}
      <span className="cta-button">{children}</span>
    </button>
  );
};