"use client"
import { useState } from 'react';
import { Shield, User, Lock, Bell, CreditCard, Check } from 'lucide-react';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [saveMessage, setSaveMessage] = useState(false);
  
  const showSaveMessage = () => {
    setSaveMessage(true);
    setTimeout(() => setSaveMessage(false), 3000);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">PII Shield</h1>
          </div>
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
            JD
          </div>
        </div>
      </header> */}
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
        
        {/* Settings Container */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium ${activeTab === 'profile' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium ${activeTab === 'security' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Lock className="h-4 w-4" />
              <span>Security</span>
            </button>
            <button 
              onClick={() => setActiveTab('notifications')}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium ${activeTab === 'notifications' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium ${activeTab === 'billing' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <CreditCard className="h-4 w-4" />
              <span>Billing</span>
            </button>
          </div>
          
          {/* Content Area */}
          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                {/* Profile Photo */}
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-medium">
                    JD
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">John Doe</h3>
                    <p className="text-gray-500 text-sm">john.doe@company.com</p>
                    <button className="text-sm text-indigo-600 mt-1">Change photo</button>
                  </div>
                </div>
                
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      defaultValue="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      defaultValue="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      defaultValue="john.doe@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    onClick={showSaveMessage}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="pt-2">
                      <button 
                        onClick={showSaveMessage}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-700">Secure your account with 2FA</p>
                      <p className="text-sm text-gray-500 mt-1">We'll send a verification code when you sign in</p>
                    </div>
                    <div className="bg-indigo-100 p-1 rounded-full">
                      <div className="w-10 h-6 flex items-center bg-indigo-600 rounded-full px-1">
                        <div className="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">PII Detection Alerts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium">Critical Detections</p>
                        <p className="text-sm text-gray-500">High-risk PII alerts</p>
                      </div>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-indigo-600" defaultChecked />
                          <span className="ml-2 text-sm">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-indigo-600" defaultChecked />
                          <span className="ml-2 text-sm">SMS</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-t border-gray-100">
                      <div>
                        <p className="font-medium">Medium Risk Detections</p>
                        <p className="text-sm text-gray-500">Medium-risk PII alerts</p>
                      </div>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-indigo-600" defaultChecked />
                          <span className="ml-2 text-sm">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-indigo-600" />
                          <span className="ml-2 text-sm">SMS</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-t border-gray-100">
                      <div>
                        <p className="font-medium">Weekly Reports</p>
                        <p className="text-sm text-gray-500">Summary of detection activities</p>
                      </div>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-indigo-600" defaultChecked />
                          <span className="ml-2 text-sm">Email</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button 
                    onClick={showSaveMessage}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
            
            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                  <h3 className="font-medium mb-1">Current Plan</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold">Enterprise</p>
                      <p className="opacity-80 mt-1">Unlimited scans & priority support</p>
                    </div>
                    <button className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium text-sm">
                      Manage Plan
                    </button>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded shadow mr-4">
                        <CreditCard className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500">Expires 09/2026</p>
                      </div>
                    </div>
                    <button className="text-indigo-600 font-medium text-sm">
                      Change
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Success Message */}
        {saveMessage && (
          <div className="fixed bottom-6 right-6 bg-green-600 text-white py-3 px-4 rounded-lg shadow-lg flex items-center">
            <Check className="h-5 w-5 mr-2" />
            <p>Settings saved successfully!</p>
          </div>
        )}
      </main>
    </div>
  );
}