import React from 'react';
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', enrollments: 120, mrr: 3600, completionRate: 78 },
  { month: 'Feb', enrollments: 150, mrr: 4500, completionRate: 82 },
  { month: 'Mar', enrollments: 200, mrr: 6000, completionRate: 75 },
  { month: 'Apr', enrollments: 180, mrr: 5400, completionRate: 80 },
];

const programData = [
  { name: 'Web Development', students: 450, revenue: 13500 },
  { name: 'UI/UX Design', students: 380, revenue: 11400 },
  { name: 'Digital Marketing', students: 320, revenue: 9600 },
  { name: 'Data Science', students: 290, revenue: 8700 },
];

const Reports = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Students</h3>
          <p className="text-3xl font-bold mt-2">1,440</p>
          <span className="text-green-500 text-sm">↑ 12% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Monthly Revenue</h3>
          <p className="text-3xl font-bold mt-2">$43,200</p>
          <span className="text-green-500 text-sm">↑ 8% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Course Completion</h3>
          <p className="text-3xl font-bold mt-2">78.5%</p>
          <span className="text-green-500 text-sm">↑ 5% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm">Active Courses</h3>
          <p className="text-3xl font-bold mt-2">24</p>
          <span className="text-blue-500 text-sm">+3 new this month</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Enrollment Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="enrollments" stroke="#4F46E5" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="mrr" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Program Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {programData.map((program) => (
                <tr key={program.name}>
                  <td className="px-6 py-4 whitespace-nowrap">{program.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{program.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${program.revenue}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-green-500">↑ {Math.floor(Math.random() * 20)}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;