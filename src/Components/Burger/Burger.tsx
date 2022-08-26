import s from './Burger.module.scss';

interface IBurger {
  activeMobileMenu: boolean;
}

const Burger = ({ activeMobileMenu }: IBurger) => {
  return (
    <div className={[s.burger, activeMobileMenu ? s._active : ''].join(' ')}>
      <span></span>
    </div>
  );
};

export default Burger;
