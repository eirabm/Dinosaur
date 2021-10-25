import Styles from './background.module.scss';
import Road from './Assets/road.png';
import Cloud from './Assets/cloud.png';

/* eslint-disable-next-line */
export interface BackgroundProps {
  start: null | boolean;
}

export function Background(props: BackgroundProps) {
  return (
    <>
      <div className={Styles.cloud}>
        <img
          src={Cloud}
          alt="cloudAsset"
          className={props.start ? Styles.activeCloud : ''}
        />
      </div>

      <div className={Styles.road}>
        <img
          src={Road}
          alt="roadAsset"
          className={props.start ? Styles.activeRoad : ''}
        />
      </div>
    </>
  );
}

export default Background;
