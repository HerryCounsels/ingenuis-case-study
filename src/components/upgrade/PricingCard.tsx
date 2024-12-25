import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Card } from '../shared/Card';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const PricingCard = ({ name, price, features, popular = false }: PricingCardProps) => {
  const planUrl = `/upgrade/payment/${name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Card className={popular ? 'ring-2 ring-indigo-600' : ''}>
      {popular && (
        <div className="bg-indigo-600 text-white text-center py-1 text-sm">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">/month</span>
        </p>

        <ul className="mt-6 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-600">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to={planUrl}
          className={`mt-8 block w-full py-2 px-4 rounded-lg text-center ${
            popular
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          } transition-colors`}
        >
          Choose Plan
        </Link>
      </div>
    </Card>
  );
};