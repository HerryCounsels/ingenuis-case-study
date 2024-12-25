import React from 'react';
import { Key, Shield, Code, BookOpen } from 'lucide-react';
import { ApiSection } from './api/ApiSection';
import { ApiEndpoint } from './api/ApiEndpoint';
import { CodeExample } from './api/CodeExample';

const Api = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">API Documentation</h1>
      <p className="text-gray-600 mb-8">Integrate our learning platform with your business applications</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <Key className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Authentication</h2>
          </div>
          <div className="text-gray-600 mb-4">
            Access the API using your API key. Keep your key secure and never share it publicly.
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <code className="text-sm">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold">Rate Limits</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Free tier: 1000 requests/day</li>
            <li>• Business tier: 10000 requests/day</li>
            <li>• Enterprise tier: Custom limits</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <ApiSection icon={BookOpen} title="Endpoints">
          <div className="space-y-6">
            <ApiEndpoint
              title="List Courses"
              endpoint="GET /api/v1/courses"
              description="Returns a list of available courses"
              parameters={[
                { name: "category", description: "Filter by course category" },
                { name: "level", description: "Filter by difficulty level" },
                { name: "limit", description: "Number of results (default: 20)" }
              ]}
            />

            <ApiEndpoint
              title="Get Course Details"
              endpoint="GET /api/v1/courses/:id"
              description="Returns detailed information about a specific course"
            />

            <ApiEndpoint
              title="Search Courses"
              endpoint="GET /api/v1/courses/search"
              description="Search for courses using various criteria"
              parameters={[
                { name: "q", description: "Search query" },
                { name: "type", description: "school_type (K12, University, Corporate)" },
                { name: "level", description: "Difficulty level" }
              ]}
            />
          </div>
        </ApiSection>

        <ApiSection icon={Code} title="Example Response">
          <CodeExample code={`{
  "data": {
    "courses": [
      {
        "id": "course_123",
        "title": "Introduction to Web Development",
        "category": "Programming",
        "level": "Beginner",
        "duration": "12 weeks",
        "enrolled_count": 1234,
        "rating": 4.8
      }
    ],
    "meta": {
      "total": 100,
      "page": 1,
      "per_page": 20
    }
  }
}`} />
        </ApiSection>
      </div>
    </div>
  );
};

export default Api;