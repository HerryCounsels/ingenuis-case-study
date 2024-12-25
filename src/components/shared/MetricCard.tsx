import React from 'react';
import { Card } from './Card';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

export const MetricCard = ({ title, value, change, changeType = 'neutral' }: MetricCardProps) => {
  const changeColors = {
    positive: 'text-green-500',
    negative: 'text-red-500',
    neutral: 'text-blue-500'
  };

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
        {change && (
          <span className={changeColors[changeType]}>{change}</span>
        )}
      </div>
    </Card>
  );
};