import Navbar from "./components/navbar";
import ProductGridAll from "./components/tarejtas";
import CombosScreen from "./components/combos";
import SocialLinks from "./components/redes-sociales";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      {/* Fondo moradito clarito */}
      <div className="fixed inset-0 -z-10 bg-purple-50" />

      <main className="min-h-screen">
        <Navbar />

        <section
          id="productos"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
        >
          <ProductGridAll />
        </section>

        <section id="combos" className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CombosScreen />
          </div>
        </section>

        <section id="redes-sociales" className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-6 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Redes Sociales
              </h2>
              <p className="mt-1 text-sm text-gray-700">
                Síguenos y contáctanos por WhatsApp
              </p>
            </header>
            <SocialLinks
              whatsappPrimary="573052709376"
              whatsappSecondary="573025904019"
              instagramUrl="https://www.instagram.com/yoxcam__makeup"
              facebookUrl="https://facebook.com/yoxcam"
              tiktokUrl="https://www.tiktok.com/@cxmila__7"
            />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
