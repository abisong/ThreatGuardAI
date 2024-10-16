import React from 'react';
import { Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Shield size={24} className="text-blue-500" />
        <h2 className="text-2xl font-semibold">About ThreatGuard AI</h2>
      </div>
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p>
            ThreatGuard AI is a cutting-edge threat detection application that utilizes advanced AI algorithms to analyze network traffic, system logs, and user behavior. Our goal is to identify suspicious patterns and potential threats to keep your systems secure.
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2">How to Use ThreatGuard AI</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Dashboard:</strong> Start here to get an overview of your security status. You'll see the number of active threats, network status, and AI Agent status.
            </li>
            <li>
              <strong>AI Agent:</strong> Located on the Dashboard, this section shows real-time analysis of your system. The activity log updates every 5 seconds with the latest scan results.
            </li>
            <li>
              <strong>Threats:</strong> Click on the "Threats" tab to view a list of all detected threats. Use the search bar to filter threats by keywords.
            </li>
            <li>
              <strong>Settings:</strong> Customize the app's behavior in the Settings tab:
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Adjust the scan interval (in seconds)</li>
                <li>Toggle notifications on/off</li>
                <li>Set the AI sensitivity level (Low, Medium, High)</li>
              </ul>
            </li>
            <li>
              <strong>Responding to Threats:</strong> When a new threat is detected, it will appear in the AI Agent's activity log and be added to the Threats list. Review the threat details and take appropriate action based on your security protocols.
            </li>
          </ol>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Regularly review the Dashboard and Threats list to stay informed about your security status.</li>
            <li>Adjust the scan interval and AI sensitivity in the Settings to balance between thorough scans and system performance.</li>
            <li>Keep ThreatGuard AI running continuously for real-time protection.</li>
            <li>Investigate and respond to detected threats promptly to maintain optimal security.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;