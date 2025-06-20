"use client"
import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Calendar, ChevronDown, Clock, File, Search, Download, BarChart2, Filter, ExternalLink } from 'lucide-react';

export default function PIIDetectionDashboard() {
  const [selectedTab, setSelectedTab] = useState('history');
  const [dateFilter, setDateFilter] = useState('Last 7 days');
  
  const detectionsData = [
    { 
      id: 'scan-1243', 
      timestamp: '2025-04-23T14:30:00', 
      documentName: 'Financial Report Q1.pdf',
      status: 'Critical',
      detections: 12,
      type: 'PDF',
      size: '4.2 MB'
    },
    { 
      id: 'scan-1242', 
      timestamp: '2025-04-22T10:15:00', 
      documentName: 'Customer List 2025.xlsx',
      status: 'Medium',
      detections: 8,
      type: 'Excel',
      size: '2.8 MB'
    },
    { 
      id: 'scan-1241', 
      timestamp: '2025-04-21T16:45:00', 
      documentName: 'Employee Records.docx',
      status: 'Low',
      detections: 3,
      type: 'Word',
      size: '1.5 MB'
    },
    { 
      id: 'scan-1240', 
      timestamp: '2025-04-21T09:22:00', 
      documentName: 'Contract - ABC Corp.pdf',
      status: 'Clean',
      detections: 0,
      type: 'PDF',
      size: '3.7 MB'
    },
    { 
      id: 'scan-1239', 
      timestamp: '2025-04-20T11:30:00', 
      documentName: 'Marketing Strategy 2025.pptx',
      status: 'Medium',
      detections: 5,
      type: 'PowerPoint',
      size: '8.1 MB'
    }
  ];
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Critical': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-amber-100 text-amber-700';
      case 'Low': return 'bg-blue-100 text-blue-700';
      case 'Clean': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Critical': return <AlertTriangle className="w-4 h-4" />;
      case 'Medium': return <AlertTriangle className="w-4 h-4" />;
      case 'Low': return <AlertTriangle className="w-4 h-4" />;
      case 'Clean': return <CheckCircle className="w-4 h-4" />;
      default: return null;
    }
  };
  
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">PII Shield</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-100 p-2 rounded-full">
              <Search className="h-5 w-5 text-gray-500" />
            </button>
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
              JD
            </div>
          </div>
        </div>
      </header> */}
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Detection History</h2>
          <p className="text-gray-600">View and manage personal identifiable information detected in your documents</p>
        </div>
        
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-500">Total Scans</div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <BarChart2 className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold">124</div>
            <div className="text-green-600 text-sm mt-2 flex items-center">
              <span>↑ 12% from last week</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-500">Critical Detections</div>
              <div className="bg-red-100 p-2 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
            </div>
            <div className="text-2xl font-bold">18</div>
            <div className="text-red-600 text-sm mt-2 flex items-center">
              <span>↑ 3% from last week</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-500">Medium Risk</div>
              <div className="bg-amber-100 p-2 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
            </div>
            <div className="text-2xl font-bold">42</div>
            <div className="text-amber-600 text-sm mt-2 flex items-center">
              <span>↓ 5% from last week</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-500">Clean Files</div>
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold">64</div>
            <div className="text-green-600 text-sm mt-2 flex items-center">
              <span>↑ 18% from last week</span>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button 
              onClick={() => setSelectedTab('history')}
              className={`pb-4 px-1 ${selectedTab === 'history' ? 'border-b-2 border-indigo-600 text-indigo-600 font-medium' : 'text-gray-500'}`}
            >
              History
            </button>
            <button 
              onClick={() => setSelectedTab('reports')}
              className={`pb-4 px-1 ${selectedTab === 'reports' ? 'border-b-2 border-indigo-600 text-indigo-600 font-medium' : 'text-gray-500'}`}
            >
              Reports
            </button>
            <button 
              onClick={() => setSelectedTab('analytics')}
              className={`pb-4 px-1 ${selectedTab === 'analytics' ? 'border-b-2 border-indigo-600 text-indigo-600 font-medium' : 'text-gray-500'}`}
            >
              Analytics
            </button>
          </nav>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>{dateFilter}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            
            <div className="relative">
              <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Filter className="h-4 w-4 text-gray-500" />
                <span>Filter</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="bg-white border border-gray-300 rounded-lg p-2 text-gray-500 hover:bg-gray-50">
              <Download className="h-5 w-5" />
            </button>
            <button className="bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-indigo-700">
              New Scan
            </button>
          </div>
        </div>
        
        {/* Detection History Table */}
        <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Detections
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {detectionsData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <File className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.documentName}</div>
                        <div className="text-sm text-gray-500">{item.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(item.status)}`}>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(item.status)}
                        <span>{item.status}</span>
                      </div>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.detections}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      {formatDate(item.timestamp)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">View</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Download</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-gray-50">
                    2
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    8
                  </a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}