import React from 'react';
import Navbar from '../components/navbar';
import ProductGridAll from '../components/tarejtas';
import Footer from '../components/footer';
import Background from '../components/background';

const ProductosPage: React.FC = () => {
  return (
    <Background>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <ProductGridAll />
          </section>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default ProductosPage;
