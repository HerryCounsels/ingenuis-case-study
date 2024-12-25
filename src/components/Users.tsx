import React from 'react';
import { Mail, Calendar, BookOpen } from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'Basmah Ayad',
    email: 'basmah.A@gmail.com',
    joinDate: '2024-01-15',
    courses: ['Web Development', 'UI/UX Design'],
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Ahmad Maloof',
    email: 'ahmad.m@gmail.com',
    joinDate: '2024-02-01',
    courses: ['Digital Marketing', 'Business Leadership'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Ameena Baba',
    email: 'ameena.b@gmail.com',
    joinDate: '2024-02-10',
    courses: ['Photography Basics', 'Advanced Photoshop'],
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  }
];

const Users = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Platform Users</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="w-4 h-4 mr-2" />
                        {user.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {user.joinDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {user.courses.length} courses
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-1">
          {selectedUser ? (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <img
                  className="h-20 w-20 rounded-full mx-auto"
                  src={selectedUser.avatar}
                  alt=""
                />
                <h2 className="mt-4 text-xl font-semibold">{selectedUser.name}</h2>
                <p className="text-gray-500">{selectedUser.email}</p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Enrolled Courses</h3>
                <div className="space-y-3">
                  {selectedUser.courses.map((course) => (
                    <div
                      key={course}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span>{course}</span>
                      <button className="text-indigo-600 hover:text-indigo-800">
                        View Progress
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-6 text-center">
              <p className="text-gray-500">Select a user to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;