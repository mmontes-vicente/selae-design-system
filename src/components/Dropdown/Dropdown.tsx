import React, { useId } from 'react';
import './Dropdown.css';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  helperText?: string;
  options: DropdownOption[];
  invalid?: boolean;
  invalidText?: string;
}

/**
 * Componente Dropdown Accesible y Corporativo
 * Identidad visual exclusiva de SELAE
 */
export const Dropdown: React.FC<DropdownProps> = ({
  labelText,
  helperText,
  options,
  invalid = false,
  invalidText,
  className = '',
  id,
  disabled,
  ...props
}) => {
  const defaultId = useId();
  const selectId = id || defaultId;
  const helperId = `${selectId}-helper`;
  const errorId = `${selectId}-error`;

  const wrapperClasses = ['selae-dropdown-wrapper', className].filter(Boolean).join(' ');
  const selectClasses = [
    'selae-select',
    invalid ? 'selae-select--invalid' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      <label htmlFor={selectId} className="selae-dropdown-label">
        {labelText}
      </label>
      
      {helperText && !invalid && (
        <div id={helperId} className="selae-dropdown-helper-text">
          {helperText}
        </div>
      )}

      {invalid && invalidText && (
        <div id={errorId} className="selae-dropdown-requirement">
          {invalidText}
        </div>
      )}

      <div className="selae-select-wrapper">
        <select
          id={selectId}
          className={selectClasses}
          disabled={disabled}
          aria-invalid={invalid ? 'true' : undefined}
          aria-describedby={
            invalid ? errorId : (helperText ? helperId : undefined)
          }
          {...props}
        >
          <option value="" disabled hidden>Selecciona una opción</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="selae-select-arrow" aria-hidden="true">▼</span>
      </div>
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
