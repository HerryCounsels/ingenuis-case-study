import React from 'react';
import { Card } from '../shared/Card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is a token?',
    answer: 'A token represents one lesson that you can create in our platform. Each lesson can include various content types like video, text, quizzes, and assignments.'
  },
  {
    question: 'Can I upgrade or downgrade?',
    answer: 'Yes, you can change your plan at any time. When upgrading, you\'ll be charged the prorated amount for the remainder of your billing cycle.'
  },
  {
    question: 'What happens if I run out of tokens?',
    answer: 'Your existing lessons will remain accessible to students, but you won\'t be able to create new lessons until you upgrade your plan or your tokens refresh at the start of your next billing cycle.'
  },
  {
    question: 'Do tokens roll over?',
    answer: 'Unused tokens expire at the end of each billing cycle. We recommend choosing a plan that matches your expected content creation needs.'
  }
];

export const FAQ = () => {
  return (
    <div className="mt-12 bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqItems.map((item) => (
          <div key={item.question}>
            <h3 className="font-semibold mb-2">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};