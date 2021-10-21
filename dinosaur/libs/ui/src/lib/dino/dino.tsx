import Styles from './dino.module.scss';
import dinoAsset from './dino.png';

/* eslint-disable-next-line */
export interface DinoProps {}

export function Dino(props: DinoProps) {
  return (
    <div className={Styles.dino}>
      <img src={dinoAsset} alt="dinoAsset" />
    </div>
  );
}

export default Dino;
