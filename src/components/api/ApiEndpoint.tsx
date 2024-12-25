import React from 'react';

interface ApiEndpointProps {
  title: string;
  endpoint: string;
  description: string;
  parameters?: { name: string; description: string; }[];
}

export const ApiEndpoint = ({ title, endpoint, description, parameters }: ApiEndpointProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="bg-gray-50 p-4 rounded-lg mb-2">
        <code className="text-sm">
          {endpoint}
        </code>
      </div>
      <p className="mt-2 text-gray-600 mb-2">
        {description}
      </p>
      {parameters && parameters.length > 0 && (
        <div className="mt-2">
          <p className="text-gray-600 mb-2">Query parameters:</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            {parameters.map(param => (
              <li key={param.name} className="flex gap-2">
                <span className="font-medium">• {param.name}:</span>
                <span>{param.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};