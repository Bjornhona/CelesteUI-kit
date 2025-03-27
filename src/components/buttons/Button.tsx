import styles from './button.module.css';
import { Button as ShadcnButton } from '@/components/ui/button';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = 'default',
  size = 'medium',
  label = 'Celeste UI Button',
  onClick,
  ...props
}: ButtonProps) => {
  // const uiButtonClass = [styles.celesteUiButton + variant && `__${variant}`, styles.celesteUiButton + size && `__${size}`].join(' ');
  // const uiButtonClass = `${styles.celesteUiButton}${variant && `__${variant}`}${size && `__${size}`}`;
  const buttonVariant = `celesteUiButton${variant && '__' + variant}`;
  const buttonSize = `celesteUiButton${size && '__' + size}`;
  // const uiButtonClass = styles[buttonStyle];

  return (
    <ShadcnButton
      className={[styles[buttonVariant], styles[buttonSize]].join(' ')}
      onClick={onClick}
      {...props}
    >
      {label}
      {children && children}
    </ShadcnButton>
  );
};
