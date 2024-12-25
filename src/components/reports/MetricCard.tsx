import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: {
    value: string;
    trend: 'up' | 'down';
  };
}

export const MetricCard = ({ title, value, change }: MetricCardProps) => {
  return (
    <div className="bg-background-primary p-6 rounded-xl shadow-sm">
      <h3 className="text-text-secondary subtext">{title}</h3>
      <p className="h2 mt-2">{value}</p>
      <div className="flex items-center gap-1 mt-1">
        {change.trend === 'up' ? (
          <TrendingUp className="w-4 h-4 text-progress-primary" />
        ) : (
          <TrendingDown className="w-4 h-4 text-error" />
        )}
        <span className={`subtext ${
          change.trend === 'up' ? 'text-progress-primary' : 'text-error'
        }`}>
          {change.value}
        </span>
      </div>
    </div>
  );
};