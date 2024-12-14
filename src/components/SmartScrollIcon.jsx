import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const SmartScrollIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.scrollY === 0) {
        setIsVisible(true);
      }
    }, 3000);

    const handleScroll = () => {
      setIsVisible(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-white-500" />
    </div>
  );
};

export default SmartScrollIcon;
