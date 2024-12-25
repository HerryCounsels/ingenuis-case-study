import React from 'react';
import { CreditCard, PaypalIcon } from '../shared/PaymentIcons';

interface PaymentFormProps {
  onSuccess: () => void;
}

export const PaymentForm = ({ onSuccess }: PaymentFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border rounded-lg col-span-2"
                required
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" value="card" defaultChecked />
                <CreditCard className="w-8 h-8" />
                <span>Credit Card</span>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" value="paypal" />
                <PaypalIcon className="w-8 h-8" />
                <span>PayPal</span>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" value="paypal" />
                <CreditCard className="w-8 h-8" />
                <span>CashU</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};