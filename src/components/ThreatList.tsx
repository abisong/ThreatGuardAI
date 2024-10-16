import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ThreatList = ({ threats }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Detected Threats</h2>
      {threats.length === 0 ? (
        <p className="text-gray-500">No threats detected.</p>
      ) : (
        <ul className="space-y-4">
          {threats.map((threat, index) => (
            <li key={index} className="flex items-center space-x-2 p-2 bg-red-50 rounded-md">
              <AlertTriangle className="text-red-500" size={20} />
              <span className="font-medium">{threat}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThreatList;