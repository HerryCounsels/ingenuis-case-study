import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '../charts/ChartContainer';
import { revenueData } from '../../data/chartData';
import { chartColors, formatCurrency, commonAxisProps } from '../../utils/chartConfig';
import type { ChartProps } from '../../types/charts';

export const RevenueChart = ({ height }: Pick<ChartProps, 'height'>) => {
  return (
    <ChartContainer title="Revenue Growth" height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
          <XAxis dataKey="month" {...commonAxisProps} />
          <YAxis 
            {...commonAxisProps}
            tickFormatter={formatCurrency}
          />
          <Tooltip 
            formatter={(value: number) => [`€${value}`, 'Revenue']}
          />
          <Bar 
            dataKey="revenue" 
            fill={chartColors.primary}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};