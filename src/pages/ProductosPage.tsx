import React from 'react';
import Navbar from '../components/navbar';
import ProductGridAll from '../components/tarejtas';
import Footer from '../components/footer';

const ProductosPage: React.FC = () => {
  return (
    <>
      {/* Fondo moradito clarito */}
      <div className="fixed inset-0 -z-10 bg-purple-50" />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <ProductGridAll />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductosPage;
