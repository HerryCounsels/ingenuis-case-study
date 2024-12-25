import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '../charts/ChartContainer';
import { enrollmentData } from '../../data/chartData';
import { chartColors, commonAxisProps } from '../../utils/chartConfig';
import type { ChartProps } from '../../types/charts';

export const EnrollmentChart = ({ height }: Pick<ChartProps, 'height'>) => {
  return (
    <ChartContainer title="Enrollment Trends" height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={enrollmentData}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
          <XAxis dataKey="month" {...commonAxisProps} />
          <YAxis {...commonAxisProps} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="enrollments" 
            stroke={chartColors.primary}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};