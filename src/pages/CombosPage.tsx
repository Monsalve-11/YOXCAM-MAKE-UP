import React from 'react';
import Navbar from '../components/navbar';
import CombosScreen from '../components/combos';
import Footer from '../components/footer';
import Background from '../components/background';

const CombosPage: React.FC = () => {
  return (
    <Background>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-8 md:py-12">
            <CombosScreen />
          </section>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default CombosPage;
