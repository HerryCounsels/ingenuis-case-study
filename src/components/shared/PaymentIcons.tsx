import React from 'react';

export const CreditCard = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

export const PaypalIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72A.641.641 0 0 1 5.577 3h11.787a6.875 6.875 0 0 1 6.875 6.875 6.875 6.875 0 0 1-6.875 6.875H11.76L10.16 20.7a.641.641 0 0 1-.633.637H7.076z"/>
  </svg>
);