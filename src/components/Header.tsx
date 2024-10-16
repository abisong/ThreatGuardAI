import React from 'react';
import { Shield, AlertTriangle, Settings, HelpCircle } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'Dashboard', icon: Shield, section: 'dashboard' },
    { name: 'Threats', icon: AlertTriangle, section: 'threats' },
    { name: 'Settings', icon: Settings, section: 'settings' },
    { name: 'About', icon: HelpCircle, section: 'about' },
  ];

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield size={32} />
          <h1 className="text-2xl font-bold">ThreatGuard AI</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.section}>
                <button
                  onClick={() => setActiveSection(item.section)}
                  className={`flex items-center space-x-1 hover:text-blue-200 ${
                    activeSection === item.section ? 'text-blue-200' : ''
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;