import Styles from './cacti.module.scss';
import cacti from './cacti.png';

/* eslint-disable-next-line */
export interface CactiProps {}

export function Cacti(props: CactiProps) {
  return (
    <div className={Styles.cacti}>
      <img src={cacti} alt="cactiAsset" />
    </div>
  );
}

export default Cacti;
