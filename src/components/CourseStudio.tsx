import React, { useState } from 'react';
import { ChevronRight, BookOpen, Users, Target, FolderOpen, Plus, CircleFadingPlus } from 'lucide-react';

const steps = ['Course Details', 'Content Creation'];

const CourseStudio = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    subject: '',
    audience: '',
    category: '',
    benefit: '',
    context: '',
    objective: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Course Studio</h1>

      <div className="mb-8">
        <div className="flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div className={`flex items-center ${index <= currentStep ? 'text-indigo-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                }`}>
                  {index + 1}
                </div>
                <span className="ml-2">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="w-5 h-5 mx-4 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {currentStep === 0 ? (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Course Subject</span>
              </div>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Introduction to Web Development"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Target Audience</span>
              </div>
            </label>
            <input
              type="text"
              name="audience"
              value={formData.audience}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Beginners with no prior experience"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <FolderOpen className="w-4 h-4" />
                <span>Category</span>
              </div>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a category</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Course Objective</span>
              </div>
            </label>
            <textarea
              name="objective"
              value={formData.objective}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              rows={4}
              placeholder="What will students learn from this course?"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>How will this course benefit the target audience?</span>
              </div>
            </label>
            <textarea
              name="benefit"
              value={formData.benefit}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              rows={4}
              placeholder="What will students learn from this course?"
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <CircleFadingPlus className="w-4 h-4" />
                <span>Additional Context (Optional)</span>
              </div>
            </label>
            <textarea
              name="context"
              value={formData.context}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              rows={4}
              placeholder="What will students learn from this course?"
            />
          </div>
          <button
            onClick={handleNext}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Continue to Content Creation
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Content Types</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors text-left">
                <h3 className="font-medium">Text Editor (WYSIWYG)</h3>
                <p className="text-sm text-gray-600">Add formatted text, lists, and basic styling</p>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors text-left">
                <h3 className="font-medium">Media Upload</h3>
                <p className="text-sm text-gray-600">Upload images, videos, or audio files</p>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors text-left">
                <h3 className="font-medium">Quiz Builder</h3>
                <p className="text-sm text-gray-600">Create interactive quizzes and assessments</p>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors text-left">
                <h3 className="font-medium">Assignment</h3>
                <p className="text-sm text-gray-600">Add practical exercises and assignments</p>
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(0)}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Save Draft
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseStudio;