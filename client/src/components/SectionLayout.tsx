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
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center md:py-6">
            {title}
          </h2>
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