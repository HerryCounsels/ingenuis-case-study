import React from 'react';
import { CheckCircle } from 'lucide-react';

export const PaymentSuccess = () => {
  return (
    <div className="max-w-md mx-auto text-center">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. You will be redirected to the homepage shortly.
        </p>
        <div className="animate-pulse bg-gray-100 h-1 rounded-full" />
      </div>
    </div>
  );
};