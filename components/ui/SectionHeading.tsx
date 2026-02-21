interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`heading-section mb-3 ${
          light ? 'text-white' : 'text-[#10243D]'
        }`}
      >
        {title}
      </h2>
      {/* Teal accent underline */}
      <div
        className={`h-1 w-12 rounded-full bg-[#1CC9A9] ${
          centered ? 'mx-auto' : ''
        } mb-4`}
      />
      {subtitle && (
        <p
          className={`text-base leading-relaxed max-w-2xl ${
            light ? 'text-[rgba(255,255,255,0.75)]' : 'text-[#5A7A8A]'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
