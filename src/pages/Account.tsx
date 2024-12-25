import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { User, Mail, Lock, Bell, CreditCard, Shield } from 'lucide-react';
import { LanguageSettings } from '../components/account/LanguageSettings';

const accountSections = [
  {
    title: 'Profile Information',
    icon: User,
    fields: [
      { label: 'Name', value: 'Sarah Johnson' },
      { label: 'Email', value: 'sarah.j@example.com' },
      { label: 'Role', value: 'Course Creator' }
    ]
  },
  {
    title: 'Subscription',
    icon: CreditCard,
    fields: [
      { label: 'Current Plan', value: 'Professional' },
      { label: 'Billing Cycle', value: 'Monthly' },
      { label: 'Next Payment', value: 'April 15, 2024' }
    ]
  },
  {
    title: 'Security',
    icon: Shield,
    fields: [
      { label: 'Two-Factor Auth', value: 'Enabled' },
      { label: 'Last Password Change', value: '2 months ago' },
      { label: 'Active Sessions', value: '2 devices' }
    ]
  }
];

export const Account = () => {
  return (
    <div className="p-8">
      <PageHeader 
        title="Account Settings" 
        subtitle="Manage your account preferences and settings"
      />

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {accountSections.map(({ title, icon: Icon, fields }) => (
            <div key={title} className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-gray-400" />
                  <h2 className="text-xl font-semibold">{title}</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {fields.map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-gray-600">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 px-4 py-2 text-primary hover:bg-gray-50 rounded-lg transition-colors">
                  Edit {title}
                </button>
              </div>
            </div>
          ))}

          <LanguageSettings />
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>Update Email</span>
              </button>
              <button className="w-full flex items-center gap-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Lock className="w-5 h-5 text-gray-400" />
                <span>Change Password</span>
              </button>
              <button className="w-full flex items-center gap-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-400" />
                <span>Notification Settings</span>
              </button>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="text-red-600 font-semibold mb-2">Danger Zone</h3>
            <p className="text-sm text-gray-600 mb-4">
              Permanently delete your account and all associated data
            </p>
            <button className="px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};