import { useEffect } from "react";

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function Background({ children, className = "" }: BackgroundProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax-element');
      
      elements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1); // Diferentes velocidades para cada elemento
        const yPos = -(scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`purple-background ${className}`}>
      {/* Elementos parallax de maquillaje */}
      <div className="parallax-element parallax-makeup-1"></div>
      <div className="parallax-element parallax-makeup-2"></div>
      <div className="parallax-element parallax-makeup-3"></div>
      <div className="parallax-element parallax-makeup-4"></div>
      <div className="parallax-element parallax-makeup-5"></div>
      <div className="parallax-element parallax-makeup-6"></div>
      
      {children}
    </div>
  );
}
