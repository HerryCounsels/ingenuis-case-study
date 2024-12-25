import React from 'react';
import { TrendingUp } from 'lucide-react';

const programData = [
  { name: 'Workplace Diversity', students: 450, revenue: 13500, growth: 15 },
  { name: 'Staff Development', students: 380, revenue: 11400, growth: 12 },
  { name: 'Leadership Skills', students: 320, revenue: 9600, growth: 8 },
  { name: 'Communication', students: 290, revenue: 8700, growth: 10 },
];

export const ProgramTable = () => {
  return (
    <div className="bg-background-primary rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="h2">Program Performance</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-background-secondary">
            <tr>
              <th className="px-6 py-3 text-left subtext text-text-secondary">Program</th>
              <th className="px-6 py-3 text-left subtext text-text-secondary">Students</th>
              <th className="px-6 py-3 text-left subtext text-text-secondary">Revenue</th>
              <th className="px-6 py-3 text-left subtext text-text-secondary">Growth</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {programData.map((program) => (
              <tr key={program.name} className="hover:bg-background-secondary">
                <td className="px-6 py-4 body1">{program.name}</td>
                <td className="px-6 py-4 body1">{program.students}</td>
                <td className="px-6 py-4 body1">€{program.revenue}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-progress-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span className="body2">{program.growth}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};