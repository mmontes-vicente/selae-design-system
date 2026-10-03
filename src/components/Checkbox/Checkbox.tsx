import React, { useId } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  size?: 'xl' | 'l' | 'm' | 'xs'; // Tipado añadido para consistencia total de la matriz
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  labelText, 
  size = 'l', // Tamaño L por defecto
  className = '', 
  ...props 
}) => {
  const checkboxId = useId();
  return (
    <div className={`selae-checkbox-wrapper selae-checkbox-wrapper--${size} ${className}`}>
      <input type="checkbox" id={checkboxId} className="selae-checkbox-input" {...props} />
      <label htmlFor={checkboxId} className="selae-checkbox-label">
        <span className="selae-checkbox-custom" aria-hidden="true" />
        {labelText}
      </label>
    </div>
  );
};
