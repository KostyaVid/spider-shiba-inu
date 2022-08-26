import s from './Mount.module.scss';
import cn from 'classnames';

interface IMountProps {
  mini?: boolean;
}

const Mount = ({ mini = false }: IMountProps) => {
  return <div className={cn(s.mount, { [s.active]: mini })}></div>;
};

export default Mount;
