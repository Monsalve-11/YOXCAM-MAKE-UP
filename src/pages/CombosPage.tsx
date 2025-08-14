import React from 'react';
import Navbar from '../components/navbar';
import CombosScreen from '../components/combos';
import Footer from '../components/footer';

const CombosPage: React.FC = () => {
  return (
    <>
      {/* Fondo moradito clarito */}
      <div className="fixed inset-0 -z-10 bg-purple-50" />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-8 md:py-12">
            <CombosScreen />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CombosPage;
