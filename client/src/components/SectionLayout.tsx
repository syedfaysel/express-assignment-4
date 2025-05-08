import { ReactNode } from "react";

interface SectionLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="bg-[#FAF7F0] font-[josefin-sans]">
      <div className="max-w-[1600px] mx-auto px-4 py-10">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 text-center md:pt-6">
            {title}
          </h2>
          {/* Centered Bar */}
          <div className="mt-2 pb-6 flex justify-center">
            <div className="w-20 h-2 bg-gray-800 rounded-3xl" />
          </div>
          {subtitle && (
            <p className="text-center text-gray-600 mt-2">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
