import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Threats from './components/Threats';
import Settings from './components/Settings';
import About from './components/About';
import { Shield, AlertTriangle, Settings as SettingsIcon, HelpCircle } from 'lucide-react';

function App() {
  const [threats, setThreats] = useState([]);
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleThreatDetection = (newThreat) => {
    setThreats((prevThreats) => [...prevThreats, newThreat]);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard threatCount={threats.length} onThreatDetected={handleThreatDetection} />;
      case 'threats':
        return <Threats threats={threats} />;
      case 'settings':
        return <Settings />;
      case 'about':
        return <About />;
      default:
        return <Dashboard threatCount={threats.length} onThreatDetected={handleThreatDetection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-8">
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;