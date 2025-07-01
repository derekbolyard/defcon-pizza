import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface PizzaCardProps {
  name: string;
  status: 'spike' | 'quiet' | 'normal';
  percentage?: string;
  activity: number[];
  borderColor: 'red' | 'blue' | 'gray';
  distance: string;
}

export default function PizzaCard({ 
  name, 
  status, 
  percentage, 
  activity, 
  borderColor,
  distance 
}: PizzaCardProps) {
  const maxActivity = Math.max(...activity);
  const borderColorClass = {
    red: 'border-red-500/60',
    blue: 'border-blue-500/60',
    gray: 'border-gray-600/60'
  }[borderColor];

  const getStatusBadge = () => {
    switch (status) {
      case 'spike':
        return (
          <div className="bg-red-600/20 border border-red-500 rounded px-2 py-1 flex items-center space-x-1">
            <TrendingUp className="w-3 h-3 text-red-400" />
            <span className="text-red-400 font-mono text-xs font-bold">
              {percentage} SPIKE
            </span>
          </div>
        );
      case 'quiet':
        return (
          <div className="bg-blue-600/20 border border-blue-500 rounded px-2 py-1 flex items-center space-x-1">
            <TrendingDown className="w-3 h-3 text-blue-400" />
            <span className="text-blue-400 font-mono text-xs font-bold">QUIET</span>
          </div>
        );
      default:
        return (
          <div className="bg-gray-600/20 border border-gray-500 rounded px-2 py-1 flex items-center space-x-1">
            <Activity className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 font-mono text-xs font-bold">NORMAL</span>
          </div>
        );
    }
  };

  return (
    <div className={`bg-gray-900/50 border-2 ${borderColorClass} rounded-lg p-4 hover:bg-gray-800/50 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <h3 className="text-green-400 font-mono font-bold text-sm tracking-wider">
            {name}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 font-mono text-xs">{distance}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        {getStatusBadge()}
      </div>

      <div className="mb-3">
        <h4 className="text-gray-300 font-mono text-xs mb-2">POPULAR TIMES ANALYSIS</h4>
        <div className="flex items-center space-x-1 mb-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-red-400 font-mono text-xs">LIVE</span>
          <span className="text-gray-400 font-mono text-xs ml-2">
            {status === 'spike' ? 'Much busier than usual' : 
             status === 'quiet' ? 'Much quieter than usual' : 
             'Busier than usual'}
          </span>
        </div>
      </div>

      <div className="h-24 flex items-end space-x-1">
        {activity.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className={`w-full rounded-t transition-all duration-300 ${
                status === 'spike' && value > maxActivity * 0.7 ? 'bg-red-500' : 'bg-blue-500'
              }`}
              style={{ height: `${(value / maxActivity) * 80}px` }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between text-gray-500 font-mono text-xs mt-2">
        <span>12p</span>
        <span>3p</span>
        <span>6p</span>
        <span>9p</span>
        <span>12a</span>
      </div>
    </div>
  );
}