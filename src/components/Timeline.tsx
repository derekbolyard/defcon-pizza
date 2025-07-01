import React, { useState } from 'react';
import { Circle } from 'lucide-react';

const days = [
  { short: 'SUN', full: 'Sunday' },
  { short: 'MON', full: 'Monday' },
  { short: 'TUE', full: 'Tuesday' },
  { short: 'WED', full: 'Wednesday' },
  { short: 'THU', full: 'Thursday' },
  { short: 'FRI', full: 'Friday' },
  { short: 'SAT', full: 'Saturday' },
];

export default function Timeline() {
  const [selectedDay, setSelectedDay] = useState(6); // Saturday selected by default

  return (
    <div className="mb-6">
      <div className="flex items-center space-x-4 mb-4">
        <Circle className="w-4 h-4 text-green-400 fill-green-400" />
        <span className="text-green-400 font-mono font-bold">TIMELINE VIEW:</span>
        <div className="flex space-x-1">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-3 py-1 font-mono text-sm border transition-all duration-200 ${
                selectedDay === index
                  ? 'bg-blue-600 border-blue-400 text-white'
                  : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-gray-500'
              }`}
            >
              {day.short}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Circle className="w-2 h-2 text-green-400 fill-green-400 animate-pulse" />
          <span className="text-green-400 font-mono text-sm">LIVE</span>
        </div>
      </div>
    </div>
  );
}