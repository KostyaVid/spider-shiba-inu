import { AnimatePresence } from 'framer-motion';
import Button from '../Button/Button';
import s from './Header.module.scss';
import MenuHeader from './MenuHeader/MenuHeader';
import { useContext, useEffect, useState } from 'react';
import { BreakPoints } from '../../App';
import Burger from '../Burger/Burger';

const Header = () => {
  const breakPoints = useContext(BreakPoints);
  const [activeMenu, setActiveMenu] = useState(false);
  function setActiveMenuState(activeMenuState: boolean) {
    setActiveMenu(activeMenuState);
  }
  useEffect(() => {
    setActiveMenu(false);
  }, [breakPoints]);

  useEffect(() => {
    if (activeMenu && (breakPoints === 'sm' || breakPoints === 'xs')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeMenu, breakPoints]);

  return (
    <header className={s.header + ' container d-flex al-items-center justify-content-between'}>
      <img alt="SpiderShiba Inu" src="./images/logo.svg" className={s.logo} />
      <AnimatePresence>
        <>
          {breakPoints === 'xxl' && (
            <MenuHeader size={'xxl'} activeMenu={activeMenu} setActiveMenu={setActiveMenuState} />
          )}
          {(breakPoints === 'xl' || breakPoints === 'lg' || breakPoints === 'md') && (
            <MenuHeader size={'xl'} activeMenu={activeMenu} setActiveMenu={setActiveMenuState} />
          )}
          {(breakPoints === 'xxl' ||
            breakPoints === 'xl' ||
            breakPoints === 'lg' ||
            breakPoints === 'md') && (
            <Button color="dark" className={s.button} onClick={() => {}}>
              <span className="opacity08 ">Join Community</span>
            </Button>
          )}
          {(breakPoints === 'sm' || breakPoints === 'xs') && (
            <>
              <MenuHeader size="sm" activeMenu={activeMenu} setActiveMenu={setActiveMenuState} />
              <div
                className={s.burger + ' d-flex al-items-center justify-content-center'}
                onClick={() => {
                  setActiveMenu(!activeMenu);
                }}>
                {activeMenu && (
                  <Button color="dark" className={s.buttonMobile} onClick={() => {}} animate={true}>
                    <span className="opacity08 ">Join Community</span>
                  </Button>
                )}
                <Burger activeMobileMenu={activeMenu} />
              </div>
            </>
          )}
        </>
      </AnimatePresence>
    </header>
  );
};

export default Header;
