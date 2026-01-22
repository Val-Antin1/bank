import React from 'react'

const PaymentReminder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-red-200">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Payment Required
          </h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Your account is currently suspended due to an outstanding payment.
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Outstanding Invoice Notice
              </h3>
              <p className="text-red-700 leading-relaxed">
                The development services for this website have been completed, but the final payment remains outstanding.
                Please settle the invoice immediately to restore full access to your website.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <strong>Contact Information:</strong><br />
            Email: Irakozeg72@gmail.com<br />
            Phone: 0798219791
          </p>
          <p className="text-gray-600">
            Once payment is received, your website will be fully restored to its normal functionality.
          </p>
        </div>

        <div className="mt-8">
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            onClick={() => window.location.href = 'mailto:[Your Email]?subject=Payment for Website Development'}
          >
            Contact Developer
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentReminder
