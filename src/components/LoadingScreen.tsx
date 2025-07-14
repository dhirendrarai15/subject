import React from 'react';
import { Atom } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 hero-gradient flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Central Atom with modern styling */}
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
            <div className="relative w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Atom className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            
            {/* Orbiting particles */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s' }}>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2.5s' }}>
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full absolute top-1/2 -right-1 transform -translate-y-1/2"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '1.8s', animationDirection: 'reverse' }}>
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full absolute top-1/2 -left-1 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
        
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Loading Portfolio</h2>
          <p className="text-purple-200 text-lg mb-6">Preparing molecular structures...</p>
          
          {/* Loading dots */}
          <div className="loading-dots text-white">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute floating"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div 
                className="bg-white/10 rounded-full"
                style={{
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;