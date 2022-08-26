import { FC } from 'react';
import { motion } from 'framer-motion';
import { ILinkImage } from '../../../links';
import s from './LinkConquer.module.scss';

const LinkConquer: FC<ILinkImage> = ({ name, url, urlImg }: ILinkImage) => {
  return (
    <motion.a className={s.linkConquer} href={url} whileHover={{ opacity: 1 }}>
      <img alt={name} src={urlImg} />
    </motion.a>
  );
};

export default LinkConquer;
