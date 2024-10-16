import React, { useState } from 'react';
import { Save } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    scanInterval: 5,
    notificationsEnabled: true,
    aiSensitivity: 'medium',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the settings to a backend or local storage
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="scanInterval" className="block text-sm font-medium text-gray-700">
            Scan Interval (seconds)
          </label>
          <input
            type="number"
            id="scanInterval"
            name="scanInterval"
            value={settings.scanInterval}
            onChange={handleChange}
            min="1"
            max="60"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="notificationsEnabled" className="flex items-center">
            <input
              type="checkbox"
              id="notificationsEnabled"
              name="notificationsEnabled"
              checked={settings.notificationsEnabled}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-2 block text-sm text-gray-900">Enable Notifications</span>
          </label>
        </div>
        <div>
          <label htmlFor="aiSensitivity" className="block text-sm font-medium text-gray-700">
            AI Sensitivity
          </label>
          <select
            id="aiSensitivity"
            name="aiSensitivity"
            value={settings.aiSensitivity}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save size={16} className="mr-2" />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;