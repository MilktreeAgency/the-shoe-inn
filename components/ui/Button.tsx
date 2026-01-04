import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) => {
  return (
    <button
      className={twMerge(
        clsx(
          'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 ease-out font-heading uppercase',
          {
            'bg-forest-800 text-white hover:bg-forest-900 hover:scale-[1.02] shadow-lg shadow-forest-900/10': variant === 'primary',
            'bg-gold text-white hover:bg-gold-dim hover:scale-[1.02]': variant === 'secondary',
            'border-2 border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white': variant === 'outline',
            'bg-transparent text-forest-800 hover:text-forest-900 hover:bg-forest-800/5': variant === 'ghost',
            'h-10 px-6 text-xs': size === 'sm',
            'h-12 px-8 text-sm': size === 'md',
            'h-14 px-10 text-base': size === 'lg',
          },
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
};