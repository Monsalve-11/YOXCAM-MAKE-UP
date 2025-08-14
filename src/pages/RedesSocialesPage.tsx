import React from "react";
import Navbar from "../components/navbar";
import SocialLinks from "../components/redes-sociales";
import Footer from "../components/footer";

const RedesSocialesPage: React.FC = () => {
  return (
    <>
      {/* Fondo moradito clarito */}
      <div className="fixed inset-0 -z-10 bg-purple-50" />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="mb-6 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Redes Sociales
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Síguenos en nuestras redes sociales y contáctanos por WhatsApp
                </p>
              </header>
              <SocialLinks
                whatsappPrimary="573052709376"
                whatsappSecondary="573025904019"
                instagramUrl="https://instagram.com/yoxcam_makeup"
                facebookUrl="https://facebook.com/yoxcam"
                tiktokUrl="https://www.tiktok.com/@yoxcam_makeup"
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RedesSocialesPage;
