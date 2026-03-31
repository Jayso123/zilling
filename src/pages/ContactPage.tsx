import React from 'react';
import Contact from '../components/Contact';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
};

export default ContactPage;
