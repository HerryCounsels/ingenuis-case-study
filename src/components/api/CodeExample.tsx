import React from 'react';

interface CodeExampleProps {
  code: string;
}

export const CodeExample = ({ code }: CodeExampleProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <pre className="text-sm overflow-x-auto">
        {code}
      </pre>
    </div>
  );
};