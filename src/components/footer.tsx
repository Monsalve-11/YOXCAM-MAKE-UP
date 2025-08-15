import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#70268c] pt-10 text-white">
      {/* Redes Sociales de la Empresa */}
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
        <div className="mb-8 flex justify-center gap-6">
          <a
            href="https://wa.me/573052709376"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
            title="WhatsApp"
          >
            <FaWhatsapp size={28} />
          </a>
          <a
            href="https://www.instagram.com/yoxcam__makeup"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
            title="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/share/1FfvQqu4go/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
            title="Facebook"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.tiktok.com/@cxmila__7"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
            title="TikTok"
          >
            <FaTiktok size={28} />
          </a>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="my-4 border-t border-white/20"></div>

      {/* Redes Sociales del Desarrollador */}
      <div className="mx-auto max-w-7xl px-4 pb-6 text-center sm:px-6 lg:px-8">
        <h4 className="mb-3 text-sm font-semibold">
          Desarrollado por Jhon Monsalve
        </h4>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Monsalve-11"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:mjhon6811@gmail.com"
            className="transform transition duration-300 hover:scale-110"
            title="Correo"
          >
            <MdEmail size={24} />
          </a>
          <a
            href="https://instagram.com/monsalve_jhon_11"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
            title="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
