import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { PaymentForm } from '../components/payment/PaymentForm';
import { PaymentSuccess } from '../components/payment/PaymentSuccess';

export const Payment = () => {
  const { plan } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="p-8">
      <PageHeader 
        title="Complete Your Purchase" 
        subtitle={`Upgrade to ${plan} Plan`} 
      />
      
      {showSuccess ? (
        <PaymentSuccess />
      ) : (
        <PaymentForm onSuccess={handlePaymentSuccess} />
      )}
    </div>
  );
};