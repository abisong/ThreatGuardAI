import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

const AIAgent = ({ onThreatDetected }) => {
  const [status, setStatus] = useState('Idle');
  const [log, setLog] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      simulateAIAnalysis();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const simulateAIAnalysis = () => {
    setStatus('Analyzing');
    setLog((prevLog) => [...prevLog, 'Analyzing network traffic...']);

    setTimeout(() => {
      const shouldDetectThreat = Math.random() < 0.3;
      if (shouldDetectThreat) {
        const threat = generateRandomThreat();
        setLog((prevLog) => [...prevLog, `Threat detected: ${threat}`]);
        onThreatDetected(threat);
      } else {
        setLog((prevLog) => [...prevLog, 'No threats detected in this scan.']);
      }
      setStatus('Idle');
    }, 2000);
  };

  const generateRandomThreat = () => {
    const threats = [
      'Suspicious login attempt',
      'Potential DDoS attack',
      'Malware signature detected',
      'Unusual data exfiltration',
      'Brute force attack on firewall',
    ];
    return threats[Math.floor(Math.random() * threats.length)];
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Bot size={24} className="text-blue-500" />
        <h2 className="text-2xl font-semibold">AI Agent</h2>
      </div>
      <div className="mb-4">
        <p className="font-medium">Status: <span className="text-green-500">{status}</span></p>
      </div>
      <div className="bg-gray-100 rounded-md p-4 h-64 overflow-y-auto">
        <h3 className="font-medium mb-2">Activity Log:</h3>
        <ul className="space-y-2">
          {log.map((entry, index) => (
            <li key={index} className="text-sm">{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIAgent;