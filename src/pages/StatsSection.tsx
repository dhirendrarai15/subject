import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FlaskConical, Award, Users, TrendingUp } from "lucide-react";

const StatsSection: React.FC = () => {
  const [key, setKey] = useState(0);

  // Loop every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: 50, suffix: "+", label: "Research Projects", icon: FlaskConical },
    { number: 15, suffix: "+", label: "Publications", icon: Award },
    { number: 500, suffix: "+", label: "Lives Impacted", icon: Users },
    { number: 40, suffix: "%", label: "Emission Reduction", icon: TrendingUp },
  ];

  return (
    <section id="stats-section" className="section-padding bg-white">
      {/* ✅ Centered container with same alignment as your old section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Animated Number */}
                <div className="stat-number mb-2 text-4xl font-bold text-emerald-600">
                  <CountUp
                    key={key + index}
                    end={stat.number}
                    duration={3}
                    suffix={stat.suffix}
                  />
                </div>

                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
