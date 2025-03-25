import styles from './button.module.css';
import { Button as ShadcnButton } from '@/components/ui/button';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  type = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  const uiButtonClass = [styles.celesteUiButton + type && `--${type}`, styles.celesteUiButton + size && `--${size}`].join(' ');
  
  return (
    <ShadcnButton className={uiButtonClass} onClick={onClick} {...props}>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
      {label}{children}
    </ShadcnButton>
  );
};
