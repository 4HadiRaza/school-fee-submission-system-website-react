import React from 'react';
import PaymentForm from './PaymentForm';
import Receipt from './Receipt';

export default function ParentDashboard() {
  return (
    <div>
      <h1>Parent Dashboard</h1>
      <PaymentForm />
      <Receipt />
    </div>
  );
}
