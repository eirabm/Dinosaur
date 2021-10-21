import { Dino } from '../dino/dino';
import { Cacti } from '../cacti/cacti';
import Road from './Assets/road.png';
import Cloud from './Assets/cloud.png';
import Styles from './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  const playerScore = 5574829;
  return (
    <div className={Styles.layout}>
      <div className={Styles.score}>
        Score: <p>{playerScore}</p>
      </div>
      <Dino />
      <Cacti />
      <div className={Styles.road}>
        <img src={Road} alt="roadAsset" />
      </div>
    </div>
  );
}

export default Layout;
