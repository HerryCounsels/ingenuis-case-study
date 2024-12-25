import React from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية', direction: 'rtl' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'el', name: 'Ελληνικά' },
  { code: 'ru', name: 'Русский' },
  { code: 'fa', name: 'فارسی', direction: 'rtl' },
  { code: 'he', name: 'עברית', direction: 'rtl' },
  { code: 'fr', name: 'Français' },
  { code: 'ur', name: 'اردو', direction: 'rtl' },
  { code: 'nl', name: 'Nederlands' }
];

export const LanguageSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-gray-400" />
          <h2 className="text-xl font-semibold">Language Settings</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {languages.map(({ code, name, direction }) => (
            <button
              key={code}
              onClick={() => setSelectedLanguage(code)}
              className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                selectedLanguage === code
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-primary/30'
              }`}
              dir={direction}
            >
              <span className="font-medium">{name}</span>
              {selectedLanguage === code && (
                <div className="w-2 h-2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
        <button className="mt-6 px-4 py-2 text-primary hover:bg-gray-50 rounded-lg transition-colors">
          Save Language Preference
        </button>
      </div>
    </div>
  );
};