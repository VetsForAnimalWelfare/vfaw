import { Link } from 'react-router-dom';

const Donate = () => {
  const bankDetails = {
    accountName: 'PASHU SAHAYOGI HAATHARU',
    accountNumber: '0090154827100018',
    bankName: 'Prabhu Bank Limited',
    branch: 'Bhairahawa Branch',
    accountType: 'Current Account',
    label: 'PRIMARY'
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="relative bg-[#1a1f2e] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] to-[#2d3748] opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl md:text-6xl">
              Support Our Mission
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              Your generous donation helps us continue our work in animal welfare and make a difference in the community.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bank Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-display font-bold text-[#1a1f2e] mb-6">
                Bank Transfer Details
              </h2>
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mr-4">
                  <svg className="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M3 10l9-7 9 7v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
                    <path d="M9 21V9h6v12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1a1f2e]">Account Details</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="text-gray-500">Label</div>
                <div className="font-semibold text-[#1a1f2e]">{bankDetails.label}</div>
                <div className="text-gray-500">Account Name</div>
                <div className="font-semibold text-[#1a1f2e]">{bankDetails.accountName}</div>
                <div className="text-gray-500">Account Number</div>
                <div className="font-semibold text-[#1a1f2e]">{bankDetails.accountNumber}</div>
                <div className="text-gray-500">Bank Name</div>
                <div className="font-semibold text-[#1a1f2e]">{bankDetails.bankName}</div>
                <div className="text-gray-500">Branch</div>
                <div className="font-semibold text-[#1a1f2e]">{bankDetails.branch}</div>
                <div className="text-gray-500">Account Type</div>
                <div className="font-semibold text-[#1a1f2e]">{bankDetails.accountType}</div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <div className="text-center">
              <h2 className="text-2xl font-display font-bold text-[#1a1f2e] mb-6">
                Scan to Donate
              </h2>
              <div className="flex flex-col items-center space-y-6">
                <img 
                  src="/bank.png" 
                  alt="Bank QR Code" 
                  className="w-full max-w-[400px] h-auto border-4 border-indigo-100 shadow-xl rounded-xl mb-4"
                />
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Scan this QR code to make a payment</p>
                  <p className="text-sm text-gray-500">Supports various payment methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate; 