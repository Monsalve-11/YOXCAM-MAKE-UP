import React from "react";
import Navbar from "../components/navbar";
import SocialLinks from "../components/redes-sociales";
import Footer from "../components/footer";
import Background from "../components/background";

const RedesSocialesPage: React.FC = () => {
  return (
    <Background>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SocialLinks
                whatsappPrimary="573052709376"
                whatsappSecondary="573025904019"
                instagramUrl="https://www.instagram.com/yoxcam__makeup"
                facebookUrl="https://www.facebook.com/share/1FfvQqu4go/"
                tiktokUrl="https://www.tiktok.com/@yoxelin__7?_t=ZS-8z3zCJxmQYS&_r=1"
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default RedesSocialesPage;
