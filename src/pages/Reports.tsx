import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { MetricCard } from '../components/reports/MetricCard';
import { EnrollmentChart } from '../components/reports/EnrollmentChart';
import { RevenueChart } from '../components/reports/RevenueChart';
import { ProgramTable } from '../components/reports/ProgramTable';

const metrics = [
  {
    title: 'Total Students',
    value: '1,440',
    change: { value: '12% from last month', trend: 'up' as const }
  },
  {
    title: 'Monthly Revenue',
    value: '€43,200',
    change: { value: '8% from last month', trend: 'up' as const }
  },
  {
    title: 'Course Completion',
    value: '78.5%',
    change: { value: '5% from last month', trend: 'up' as const }
  },
  {
    title: 'Active Courses',
    value: '24',
    change: { value: '+3 new this month', trend: 'up' as const }
  }
];

export const Reports = () => {
  return (
    <div className="p-8">
      <PageHeader 
        title="Analytics Dashboard" 
        subtitle="Track your platform's performance and growth"
      />
      
      <div className="grid grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <EnrollmentChart />
        <RevenueChart />
      </div>

      <ProgramTable />
    </div>
  );
};