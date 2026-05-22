"use client";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="inline-block h-2 w-2 rounded-full bg-got-accent" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-got-light">
        {label}
      </span>
    </div>
  );
}
