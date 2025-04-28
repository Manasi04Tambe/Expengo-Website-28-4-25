import React from 'react';

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dual Interface for Complete Control</h2>
          <p className="text-xl text-gray-600">
            Our system features two powerful interfaces - a comprehensive web dashboard for administrators and an intuitive mobile app for drivers.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Admin Dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Admin Web Dashboard</h3>
            <ul className="space-y-4">
              {[
                'Comprehensive expense overview with filtering options',
                'Detailed analytics and expense trend visualization',
                'Driver management and expense approval workflow',
                'Customizable reports for accounting and compliance',
                'Budget tracking and expense category management',
                'System configuration and user permission controls'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Driver Mobile App</h3>
            <ul className="space-y-4">
              {[
                'Quick expense logging with photo receipt capture',
                'Real-time expense submission for faster reimbursement',
                'Location-based service station recommendations',
                'Push notifications for expense approvals and rejections',
                'Expense history and personal performance metrics',
                'Offline functionality for areas with poor connectivity'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center">
            <div className="w-100 p-2 ">
              {/* <div className="h-8 bg-gray-900 rounded-t-3xl flex items-center justify-center">
                <div className="w-24 h-4 bg-gray-800 rounded-full"></div>
              </div> */}
              <div className="bg-white rounded-3xl overflow-hidden">
                <img 
                  src="https://s4d.eu/wp-content/uploads/2024/03/Driver-App.png" 
                  alt="Driver Mobile App" 
                  className="w-full h-auto"
                />
              </div>
              {/* <div className="h-8 bg-gray-900 rounded-b-3xl flex items-center justify-center">
                <div className="w-12 h-4 bg-gray-800 rounded-full"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;