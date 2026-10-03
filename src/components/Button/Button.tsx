import React from 'react';
import './Button.css';

// Arquitectura de Tipos Estricta de SELAE
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isExpressive?: boolean;
}

/**
 * Componente Button Polimórfico y Accesible
 * Identidad visual exclusiva de SELAE
 */
export const Button: React.FC<ButtonProps> = ({
  kind = 'primary',
  size = 'md',
  isExpressive = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  // Prefijo unificado de marca SELAE
  const baseClass = 'selae-btn';
  const kindClass = `selae-btn--${kind}`;
  const sizeClass = `selae-btn--${size}`;
  const expressiveClass = isExpressive ? 'selae-btn--expressive' : '';
  
  const computedClasses = [
    baseClass,
    kindClass,
    sizeClass,
    expressiveClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={computedClasses}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : undefined}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <span className="selae-btn__text">{children}</span>
    </button>
  );
};

Button.displayName = 'Button';
