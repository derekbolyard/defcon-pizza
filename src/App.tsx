import React from 'react';
import Header from './components/Header';
import LiveFeed from './components/LiveFeed';
import Timeline from './components/Timeline';
import PizzaCard from './components/PizzaCard';
import { pizzaRestaurants } from './data/pizzaData';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Subtle scan lines effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent h-1 animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="p-6">
          <LiveFeed />
          
          <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-3 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 font-mono text-sm">
                🔒 ADVERTISEMENT SPACE AVAILABLE
              </span>
            </div>
          </div>

          <Timeline />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pizzaRestaurants.map((restaurant, index) => (
              <PizzaCard
                key={index}
                name={restaurant.name}
                status={restaurant.status}
                percentage={restaurant.percentage}
                activity={restaurant.activity}
                borderColor={restaurant.borderColor}
                distance={restaurant.distance}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;