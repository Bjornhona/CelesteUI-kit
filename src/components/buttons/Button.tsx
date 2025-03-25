import styles from './button.module.css';

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
    <button className={uiButtonClass} onClick={onClick} {...props}>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
      {label}{children}
    </button>
  );
};
