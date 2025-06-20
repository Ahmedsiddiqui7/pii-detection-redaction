"use client"
import React, { useState } from 'react';
import { 
  PieChart, Pie, Cell, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, LineChart, 
  Line, AreaChart, Area
} from 'recharts';
import { 
  Shield, AlertCircle, File, FileText, 
  Database, Users, Calendar, ArrowUp, 
  ArrowDown, Check, AlertTriangle, Search,
  Bell, Menu, X
} from 'lucide-react';

export default function PIIDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data for charts
  const pieData = [
    { name: 'Email', value: 45 },
    { name: 'Phone', value: 25 },
    { name: 'SSN', value: 15 },
    { name: 'Credit Card', value: 10 },
    { name: 'Address', value: 5 },
  ];

  const barData = [
    { name: 'Jan', emails: 40, phones: 24, ssn: 10 },
    { name: 'Feb', emails: 30, phones: 13, ssn: 5 },
    { name: 'Mar', emails: 20, phones: 98, ssn: 15 },
    { name: 'Apr', emails: 27, phones: 39, ssn: 20 },
    { name: 'May', emails: 18, phones: 48, ssn: 8 },
    { name: 'Jun', emails: 23, phones: 38, ssn: 12 },
  ];

  const lineData = [
    { name: 'Week 1', scanned: 400, detected: 240 },
    { name: 'Week 2', scanned: 300, detected: 139 },
    { name: 'Week 3', scanned: 200, detected: 90 },
    { name: 'Week 4', scanned: 278, detected: 190 },
    { name: 'Week 5', scanned: 189, detected: 110 },
    { name: 'Week 6', scanned: 239, detected: 150 },
  ];

  const areaData = [
    { name: 'Mon', value: 40 },
    { name: 'Tues', value: 30 },
    { name: 'Wed', value: 20 },
    { name: 'Thur', value: 27 },
    { name: 'Fri', value: 90 },
    { name: 'Sat', value: 23 },
    { name: 'Sun', value: 10 },
  ];

  const recentAlerts = [
    { id: 1, type: 'Email Address', file: 'customer_data.xlsx', severity: 'High', time: '10m ago' },
    { id: 2, type: 'SSN', file: 'employees.csv', severity: 'Critical', time: '25m ago' },
    { id: 3, type: 'Phone Number', file: 'contacts.docx', severity: 'Medium', time: '1h ago' },
    { id: 4, type: 'Credit Card', file: 'orders.pdf', severity: 'High', time: '2h ago' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FD0'];

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      
      

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Top Navigation */}
        {/* <div className="bg-white shadow-md">
          <div className="container px-6 py-4 mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-gray-600 focus:outline-none">
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} 
              </button>
              <h1 className="text-xl font-semibold text-gray-700 ml-2 lg:ml-0">PII Detection Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="text-gray-500 focus:outline-none">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                  A
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Dashboard Content */}
        <div className="container px-6 py-8 mx-auto">
          {/* Stats Cards */}
          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
              <div className="p-3 mr-4 text-white bg-indigo-600 rounded-full">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Total Files Scanned
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  1,482
                </p>
                <div className="flex items-center text-green-500 text-sm">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>12% from last week</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
              <div className="p-3 mr-4 text-white bg-red-500 rounded-full">
                <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  PII Detected
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  642
                </p>
                <div className="flex items-center text-red-500 text-sm">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>8% from last week</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
              <div className="p-3 mr-4 text-white bg-green-500 rounded-full">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Issues Resolved
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  432
                </p>
                <div className="flex items-center text-green-500 text-sm">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>25% from last week</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
              <div className="p-3 mr-4 text-white bg-yellow-500 rounded-full">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Pending Issues
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  210
                </p>
                <div className="flex items-center text-red-500 text-sm">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  <span>5% from last week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            {/* PII Types Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">PII Types Detected</h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Monthly Trend Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Monthly PII Detection Trend</h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={barData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="emails" name="Email" fill="#0088FE" />
                  <Bar dataKey="phones" name="Phone" fill="#00C49F" />
                  <Bar dataKey="ssn" name="SSN" fill="#FFBB28" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Scan vs Detection Line Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Files Scanned vs PII Detected</h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={lineData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="scanned" 
                    name="Files Scanned"
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="detected" 
                    name="PII Detected"
                    stroke="#ff7300" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Daily Activity Area Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Daily Detection Activity</h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={areaData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8884d8" 
                    fill="#8884d8" 
                    fillOpacity={0.3} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Alerts Table */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Recent PII Alerts</h2>
              <button className="text-sm px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PII Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      File
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Severity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Detected
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentAlerts.map((alert) => (
                    <tr key={alert.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{alert.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{alert.file}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          alert.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                          alert.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {alert.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {alert.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                          Review
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          Resolve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}