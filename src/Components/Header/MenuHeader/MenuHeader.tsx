import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { linksHeader } from '../../../links';
import cn from 'classnames';
import Button from '../../Button/Button';
import s from './MenuHeader.module.scss';

interface IMenuProps {
  size: 'xxl' | 'xl' | 'sm';
  activeMenu: boolean;
  setActiveMenu: (activeMenuState: boolean) => void;
}

const MenuHeader = ({ size, activeMenu, setActiveMenu }: IMenuProps) => {
  const animateNav = useAnimation();
  const animateLi = useAnimation();
  const styleMenu = cn(s.nav, { [s.activeMenu]: activeMenu });
  function bodyOverlay(e: PointerEvent) {
    if (
      !(e.target as HTMLElement).closest('.' + s.nav) &&
      !(e.target as HTMLElement).closest('.' + s.buttonMenu)
    )
      setActiveMenu(false);
  }

  useEffect(() => {
    animateNav.set({ x: '100%' });
    animateLi.set({ opacity: 0 });
    if (activeMenu) {
      animateNav.start({ x: 0, transition: { duration: 0.5 } });
      animateLi.start({ opacity: 1, transition: { duration: 0.5, delay: 0.3 } });
    } else {
      animateNav.set({ x: 0 });
      animateLi.set({ opacity: 1 });
    }
  }, [activeMenu]);

  useEffect(() => {
    if (size === 'xl') {
      if (activeMenu) {
        document.body.addEventListener('pointerup', bodyOverlay);
      } else {
        document.body.removeEventListener('pointerup', bodyOverlay);
      }
      return () => {
        document.body.removeEventListener('pointerup', bodyOverlay);
      };
    }
  }, [activeMenu, size]);

  const links = linksHeader.map((item, index) => (
    <motion.li key={item.name + index} className={s.item} animate={animateLi}>
      <motion.a
        href={item.url}
        whileHover={{ color: '#e11d2e' }}
        transition={{ duration: 0.1 }}
        onClick={(e) => {
          e.preventDefault();
          const link = document.getElementById(item.url);
          setActiveMenu(false);
          if (link) {
            link.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          } else {
            document.location.href = item.url;
          }
        }}>
        {item.name}
      </motion.a>
    </motion.li>
  ));

  return (
    <>
      <motion.nav className={styleMenu} animate={animateNav}>
        <ul className={s.items + ' d-flex al-items-center justify-content-end'}>{links}</ul>
      </motion.nav>
      {size === 'xl' && (
        <Button
          color="outline"
          className={s.buttonMenu}
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}>
          Menu
        </Button>
      )}
    </>
  );
};

export default MenuHeader;
