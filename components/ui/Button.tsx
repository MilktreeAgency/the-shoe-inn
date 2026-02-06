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
          'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 ease-out font-heading uppercase rounded-lg',
          {
            'bg-accent text-evergreen hover:bg-accent/90 hover:scale-[1.02] shadow-lg shadow-accent/20': variant === 'primary',
            'bg-evergreen text-floral hover:bg-evergreen/90 hover:scale-[1.02]': variant === 'secondary',
            'border-2 border-evergreen text-evergreen hover:bg-evergreen hover:text-floral': variant === 'outline',
            'bg-transparent text-evergreen hover:text-evergreen/70 hover:bg-evergreen/5': variant === 'ghost',
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