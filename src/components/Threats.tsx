import React, { useState } from 'react';
import { AlertTriangle, Search, X } from 'lucide-react';

const Threats = ({ threats }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredThreats = threats.filter((threat) =>
    threat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Detected Threats</h2>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search threats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded-md"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>
      {filteredThreats.length === 0 ? (
        <p className="text-gray-500">No threats detected.</p>
      ) : (
        <ul className="space-y-4">
          {filteredThreats.map((threat, index) => (
            <li key={index} className="flex items-center space-x-2 p-2 bg-red-50 rounded-md">
              <AlertTriangle className="text-red-500 flex-shrink-0" size={20} />
              <span className="font-medium">{threat}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Threats;