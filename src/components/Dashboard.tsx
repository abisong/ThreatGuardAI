import React from 'react';
import { AlertTriangle, Activity, Shield } from 'lucide-react';
import AIAgent from './AIAgent';

const Dashboard = ({ threatCount, onThreatDetected }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Security Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DashboardCard
            icon={<AlertTriangle className="text-red-500" size={24} />}
            title="Active Threats"
            value={threatCount}
          />
          <DashboardCard
            icon={<Activity className="text-green-500" size={24} />}
            title="Network Status"
            value="Stable"
          />
          <DashboardCard
            icon={<Shield className="text-blue-500" size={24} />}
            title="AI Agent Status"
            value="Active"
          />
        </div>
      </div>
      <AIAgent onThreatDetected={onThreatDetected} />
    </div>
  );
};

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default Dashboard;