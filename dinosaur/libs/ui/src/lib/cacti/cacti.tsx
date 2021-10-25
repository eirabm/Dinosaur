import { forwardRef } from 'react';
import Styles from './cacti.module.scss';
import cacti from './cacti.png';

/* eslint-disable-next-line */
export interface CactiProps {
  start: null | boolean;
}

export const Cacti = forwardRef(
  (props: CactiProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div
        className={[Styles.cacti, props.start ? Styles.active : '']
          .filter(Boolean)
          .join(' ')}
        ref={ref}
      >
        <img src={cacti} alt="cactiAsset" />
      </div>
    );
  }
);

export default Cacti;
