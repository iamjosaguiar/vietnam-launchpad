'use client';

import { useState } from 'react';

interface PaymentOptionsProps {
  amount: number;
  service: string;
  onPaymentMethod?: (method: string) => void;
}

export default function PaymentOptions({ amount, service, onPaymentMethod }: PaymentOptionsProps) {
  const [selectedMethod, setSelectedMethod] = useState('');

  const paymentMethods = [
    {
      id: 'bank-transfer',
      name: 'Bank Transfer (Vietnam)',
      description: 'Direct transfer to Vietnamese business account',
      icon: '🏦',
      fees: '0% fees',
      processing: '1-2 business days',
      supported: ['VND', 'USD'],
      popular: true
    },
    {
      id: 'vnpay',
      name: 'VNPAY',
      description: 'Popular Vietnamese payment gateway',
      icon: '💳',
      fees: '2.5% + VND 3,000',
      processing: 'Instant',
      supported: ['VND', 'Visa', 'Mastercard', 'JCB'],
      popular: true
    },
    {
      id: 'momo',
      name: 'MoMo E-Wallet',
      description: 'Leading Vietnamese mobile wallet',
      icon: '📱',
      fees: '2% transaction fee',
      processing: 'Instant',
      supported: ['VND'],
      popular: false
    },
    {
      id: 'zalopay',
      name: 'ZaloPay',
      description: 'Zalo integrated payment system',
      icon: '⚡',
      fees: '2% transaction fee',
      processing: 'Instant',
      supported: ['VND'],
      popular: false
    },
    {
      id: 'wise',
      name: 'Wise (International)',
      description: 'For international clients',
      icon: '🌍',
      fees: '0.5-2% + fixed fee',
      processing: '1-3 business days',
      supported: ['USD', 'EUR', 'GBP', 'AUD', 'SGD'],
      popular: true
    },
    {
      id: 'cryptocurrency',
      name: 'Cryptocurrency (USDT)',
      description: 'Stable coin payments accepted',
      icon: '₿',
      fees: 'Network fees only',
      processing: '10-30 minutes',
      supported: ['USDT', 'USDC'],
      popular: false
    }
  ];

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
    onPaymentMethod?.(methodId);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Options</h3>
        <p className="text-gray-600">
          Service: {service} • Amount: ${amount.toLocaleString()}
        </p>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedMethod === method.id
                ? 'border-vietnam-red bg-red-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleMethodSelect(method.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{method.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900">{method.name}</h4>
                    {method.popular && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-500">
                    <div>
                      <span className="font-medium">Fees:</span> {method.fees}
                    </div>
                    <div>
                      <span className="font-medium">Processing:</span> {method.processing}
                    </div>
                    <div>
                      <span className="font-medium">Supports:</span> {method.supported.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`w-5 h-5 rounded-full border-2 ${
                selectedMethod === method.id
                  ? 'border-vietnam-red bg-vietnam-red'
                  : 'border-gray-300'
              }`}>
                {selectedMethod === method.id && (
                  <div className="w-full h-full rounded-full bg-vietnam-red"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMethod && (
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Payment Instructions</h4>
          {selectedMethod === 'bank-transfer' && (
            <div className="text-sm text-blue-800">
              <p className="mb-2">Transfer details will be provided after confirmation:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Bank: Vietcombank Vietnam</li>
                <li>Account holder: Vietnam Launchpad Co., Ltd</li>
                <li>Include service reference in transfer description</li>
              </ul>
            </div>
          )}
          {selectedMethod === 'vnpay' && (
            <div className="text-sm text-blue-800">
              <p>You'll be redirected to VNPAY's secure payment portal to complete your transaction.</p>
            </div>
          )}
          {(selectedMethod === 'momo' || selectedMethod === 'zalopay') && (
            <div className="text-sm text-blue-800">
              <p>You'll receive a QR code to scan with your {selectedMethod === 'momo' ? 'MoMo' : 'ZaloPay'} app.</p>
            </div>
          )}
          {selectedMethod === 'wise' && (
            <div className="text-sm text-blue-800">
              <p>You'll receive an invoice via Wise with instructions for international transfer.</p>
            </div>
          )}
          {selectedMethod === 'cryptocurrency' && (
            <div className="text-sm text-blue-800">
              <p className="mb-2">Cryptocurrency payment instructions:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Only USDT and USDC accepted</li>
                <li>Wallet address provided after confirmation</li>
                <li>Include transaction hash as payment proof</li>
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-8">
        <button
          disabled={!selectedMethod}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
            selectedMethod
              ? 'bg-vietnam-red text-white hover:bg-red-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue to Payment
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>🔒 All payments are secure and encrypted</p>
        <p>💰 No hidden fees • 📞 Support available 24/7</p>
      </div>
    </div>
  );
}