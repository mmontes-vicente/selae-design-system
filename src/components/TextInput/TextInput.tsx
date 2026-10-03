import React, { useId } from 'react';
import './TextInput.css';

// Arquitectura de Tipos Estricta de SELAE para Formularios
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  helperText?: string;
  invalid?: boolean;
  invalidText?: string;
}

/**
 * Componente TextInput Accesible y Corporativo
 * Identidad visual exclusiva de SELAE
 */
export const TextInput: React.FC<TextInputProps> = ({
  labelText,
  helperText,
  invalid = false,
  invalidText,
  className = '',
  id,
  disabled,
  ...props
}) => {
  // Genera un ID único para amarrar la etiqueta con el input (Normativa WCAG Accesibilidad)
  const defaultId = useId();
  const inputId = id || defaultId;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  // Construcción de clases con prefijo unificado selae
  const wrapperClasses = ['selae-text-input-wrapper', className].filter(Boolean).join(' ');
  const inputClasses = [
    'selae-text-input',
    invalid ? 'selae-text-input--invalid' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      <label htmlFor={inputId} className="selae-label">
        {labelText}
      </label>
      
      {helperText && !invalid && (
        <div id={helperId} className="selae-helper-text">
          {helperText}
        </div>
      )}

      {invalid && invalidText && (
        <div id={errorId} className="selae-requirement">
          {invalidText}
        </div>
      )}

      <input
        id={inputId}
        className={inputClasses}
        disabled={disabled}
        aria-invalid={invalid ? 'true' : undefined}
        aria-describedby={
          invalid ? errorId : (helperText ? helperId : undefined)
        }
        {...props}
      />
    </div>
  );
};

TextInput.displayName = 'TextInput';
