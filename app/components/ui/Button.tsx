import React from 'react';
export default function Button({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      className={`rounded-full px-6 py-3 font-semibold shadow transition-transform hover:-translate-y-0.5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
