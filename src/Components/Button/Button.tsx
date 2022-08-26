import { FC, ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import cn from 'classnames';
import s from './Button.module.scss';
interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  color?: 'primary' | 'dark' | 'outline' | 'fill';
  className?: string;
  animate?: boolean;
}

const Button: FC<IButtonProps> = ({
  children,
  color = 'primary',
  className,
  onClick,
  animate = false,
}: IButtonProps) => {
  const buttonClasses = cn(s.button, className, s[color]);
  const animateButton = useAnimation();

  useEffect(() => {
    if (animate) {
      animateButton.set({ opacity: 0 });
      animateButton.start({ opacity: 1, transition: { duration: 0.5, delay: 0.3 } });
    }
  }, []);

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 1.07 }}
      animate={animateButton}>
      {children}
    </motion.button>
  );
};

export default Button;
