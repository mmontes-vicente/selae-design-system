import React from 'react';
import './Button.css';

// Arquitectura de Tipos Estricta Estilo IBM Carbon
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isExpressive?: boolean;
}

/**
 * Componente Button Polimórfico y Accesible para SELAE
 * Basado estrictamente en los tokens de IBM Carbon v11
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
  // Construcción de clases CSS semánticas normativas de Carbon
  const baseClass = 'cds-btn';
  const kindClass = `cds-btn--${kind}`;
  const sizeClass = `cds-btn--${size}`;
  const expressiveClass = isExpressive ? 'cds-btn--expressive' : '';
  
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
      // Anillo de enfoque y navegación por teclado nativa
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <span className="cds-btn__text">{children}</span>
    </button>
  );
};

Button.displayName = 'Button';
