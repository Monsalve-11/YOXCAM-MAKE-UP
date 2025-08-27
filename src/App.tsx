import Navbar from "./components/navbar";
import ProductGridAll from "./components/tarejtas";
import CombosScreen from "./components/combos";
import SocialLinks from "./components/redes-sociales";
import Footer from "./components/footer";
import Background from "./components/background";

export default function App() {
  return (
    <Background>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-24">
          <section
            id="productos"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-purple-200 scroll-mt-24"
          >
            <ProductGridAll />
          </section>

          <section
            id="combos"
            className="py-8 md:py-12 bg-purple-200 scroll-mt-24"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CombosScreen />
            </div>
          </section>

          <section
            id="redes-sociales"
            className="min-h-[calc(100vh-6rem)] py-12 md:py-16 bg-purple-200 scroll-mt-24"
          >
            <div className="h-full flex items-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SocialLinks
                  whatsappPrimary="573052709376"
                  whatsappSecondary="573025904019"
                  instagramUrl="https://www.instagram.com/yoxcam__makeup"
                  facebookUrl="https://www.facebook.com/share/1FfvQqu4go/"
                  tiktokUrl="https://www.tiktok.com/@yoxelin__7?_t=ZS-8z3zCJxmQYS&_r=1"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Background>
  );
}
