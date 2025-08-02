import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Services />
      <TechStack />
    </div>
  );
};

export default HomePage;