import { roads } from './road';
import RoadCard from './RoadCard/RoadCard';
import s from './Roadmap.module.scss';

const Roadmap = () => {
  return (
    <section className={s.roadmap + ' container'} id="roadmap">
      <h2>Roadmap</h2>
      <div className={s.roads}>
        {roads.map((elem, index) => (
          <div key={elem.id} className={s.road + ' d-flex'}>
            <RoadCard {...elem} />
          </div>
        ))}
        <div className={s.line}></div>
      </div>
    </section>
  );
};

export default Roadmap;
