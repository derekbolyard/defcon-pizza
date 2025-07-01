import React from 'react';
import { Pizza, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-green-500/30">
      <div className="flex items-center space-x-4">
        <Pizza className="w-12 h-12 text-orange-500" />
        <div>
          <h1 className="text-3xl font-bold text-green-400 font-mono tracking-wider">
            PENTAGON PIZZA INDEX
          </h1>
          <p className="text-sm text-green-300/70 font-mono">
            Intelligence by the Slice
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="bg-orange-600/20 border border-orange-500 rounded-lg p-4 flex items-center space-x-3">
          <Shield className="w-6 h-6 text-orange-400" />
          <div>
            <div className="text-orange-400 font-mono font-bold text-lg">DEFCON 2</div>
            <div className="text-orange-300 font-mono text-sm">FAST PACE</div>
          </div>
          <div className="text-orange-400 font-mono text-3xl font-bold">2</div>
        </div>
      </div>
    </header>
  );
}