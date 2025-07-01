import React, { useState, useEffect } from 'react';
import { Radio, Users, TrendingUp } from 'lucide-react';

const feedItems = [
  "🔴 OSINT FEED • 15 mins ago • 6 REPORTS • 3 ALERTS",
  "🔴 RESTRICTED • 15s INTERVALS",
  "Would just like to say that I would like to see more cafeteria activity and explosions over talamania to it's southwest of the Iranian capital of Tehran, those to the location of several...",
  "🔴 CLASSIFIED • 25 mins ago",
  "PIZZA analysis indicates increased activity in sector 7...",
  "🔴 URGENT • 3 mins ago",
  "Multiple cheese-related incidents reported in northwest quadrant...",
  "🔴 MONITORING • 8 mins ago",
  "Unusual pepperoni patterns detected in surveillance zone...",
];

export default function LiveFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % feedItems.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoScroll]);

  return (
    <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-cyan-400 font-mono text-sm font-bold">LIVE FEED</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className="text-cyan-400 font-mono text-xs hover:text-cyan-300 transition-colors"
          >
            AUTO-SCROLL: {autoScroll ? 'ON' : 'OFF'}
          </button>
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs">
            <Users className="w-3 h-3" />
            <span>192.168.1.1</span>
          </div>
        </div>
      </div>
      
      <div className="bg-black/50 rounded border border-cyan-500/20 p-3 h-20 overflow-hidden">
        <div 
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${currentIndex * 24}px)` }}
        >
          {feedItems.map((item, index) => (
            <div key={index} className="text-green-300 font-mono text-xs leading-6 whitespace-nowrap">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}