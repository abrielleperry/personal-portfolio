import { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  label: string;
  icon: string;
  isVisible: boolean;
}

const Counter = ({ value, label, icon, isVisible }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const incrementTime = 10; // 10ms
      const steps = Math.ceil(duration / incrementTime);
      const increment = Math.ceil(end / steps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div className="flex flex-col items-center p-6 border-r border-dashed last:border-r-0 md:w-1/3">
      <h1 className="text-4xl font-bold text-blue-700">
        <span>{count.toLocaleString()}</span>
      </h1>
      <h3 className="text-xl font-semibold mt-2">{label}</h3>
      <i className={`text-3xl mt-2 ${icon}`}></i>
    </div>
  );
};

interface CounterStatsProps {
  isVisible: boolean;
}

export default function CounterStats({ isVisible }: CounterStatsProps) {
  return (
    <div className="container mx-auto my-20 font-bold text-center">
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        <Counter
          value={124}
          label="Projects"
          icon="fa fa-users"
          isVisible={isVisible}
        />
        <Counter
          value={6}
          label="Years of Tech Experience"
          icon="fa fa-desktop"
          isVisible={isVisible}
        />
        <Counter
          value={3914}
          label="Total Contributions"
          icon="fa fa-coffee"
          isVisible={isVisible}
        />
      </div>
    </div>
  );
}
