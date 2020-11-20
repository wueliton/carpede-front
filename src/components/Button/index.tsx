import React from 'react';
import { ButtonProps } from '../../types';
import styles from './Button.module.css';

const Button: React.FC<ButtonProps> = ({ text, action }: ButtonProps) => {
  return (
    <button type="button" onClick={() => action} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
