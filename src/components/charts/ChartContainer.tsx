import React from 'react';
import { ChartProps } from '../../types/charts';

interface ChartContainerProps extends ChartProps {
  children: React.ReactNode;
}

export const ChartContainer = ({ 
  title, 
  children, 
  height = 300 
}: ChartContainerProps) => {
  return (
    <div className="bg-background-primary p-6 rounded-xl shadow-sm">
      <h2 className="h2 mb-6">{title}</h2>
      <div style={{ height: `${height}px` }}>
        {children}
      </div>
    </div>
  );
};