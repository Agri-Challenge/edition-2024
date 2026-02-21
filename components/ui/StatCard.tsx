import { ReactNode } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  highlight?: boolean;
}

export default function StatCard({ value, label, icon, highlight = false }: StatCardProps) {
  return (
    <div
      className={`stat-card-accent rounded-xl p-5 flex flex-col gap-1 ${
        highlight
          ? 'bg-[#10243D] text-white'
          : 'bg-[#F8FAFA] text-[#10243D]'
      }`}
      style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.08)' }}
    >
      {icon && (
        <div className="mb-1 text-[#94CCC6]">{icon}</div>
      )}
      <span
        className={`font-mono text-2xl font-extrabold tracking-tight leading-none ${
          highlight ? 'text-[#1CC9A9]' : 'text-[#1CC9A9]'
        }`}
      >
        {value}
      </span>
      <span
        className={`text-xs font-medium uppercase tracking-wider ${
          highlight ? 'text-[rgba(255,255,255,0.7)]' : 'text-[#5A7A8A]'
        }`}
      >
        {label}
      </span>
    </div>
  );
}
