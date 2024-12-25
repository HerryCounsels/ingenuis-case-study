import React from 'react';
import { PLAN_FEATURES } from '../utils/constants';
import { PricingCard } from './upgrade/PricingCard';
import { FAQ } from './upgrade/FAQ';

const plans = [
  {
    name: '3 Tokens',
    price: '€29',
    features: PLAN_FEATURES.basic
  },
  {
    name: '6 Tokens',
    price: '€49',
    features: PLAN_FEATURES.pro,
    popular: true
  },
  {
    name: '12 Tokens',
    price: '€89',
    features: PLAN_FEATURES.enterprise
  }
];

const Upgrade = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Upgrade Your Plan</h1>
      <p className="text-gray-600 mb-8">Choose the plan that best fits your needs</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>

      <FAQ />
    </div>
  );
};

export default Upgrade;