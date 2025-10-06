import { ReactNode } from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  altText: string;
  children: ReactNode;
}

export const HeroSection = ({ backgroundImage, altText, children }: HeroSectionProps) => {
  return (
    <section 
      className="relative hero-gradient text-primary-foreground overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height:"80vh",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 hero-gradient opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:pt-52">
        {children}
      </div>
    </section>
  );
};