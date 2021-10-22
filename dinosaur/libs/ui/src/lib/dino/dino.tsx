import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Styles from './dino.module.scss';
import dinoAsset from './dino.png';

/* eslint-disable-next-line */
export interface DinoProps {}

export function Dino(props: DinoProps) {
  const [jump, setJump] = useState(false);
  const [crouch, setCrouch] = useState(false);

  const onSpacePressed = (e: any) => {
    if (e.code === 'Space') {
      if (!jump && !crouch) {
        setJump(true);
        setTimeout(() => {
          setJump(false);
        }, 500);
      }
    }
    if (e.code === 'ArrowDown') {
      if (!jump && !crouch) {
        setCrouch(true);
        setTimeout(() => {
          setCrouch(false);
        }, 500);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onSpacePressed);
  }, [jump]);

  return (
    <div
      className={[Styles.dino, jump ? Styles.jump : '']
        .filter(Boolean)
        .join(' ')}
      onKeyDown={(e) => console.log(e)}
    >
      <img
        className={crouch ? Styles.crouch : Styles.run}
        src={dinoAsset}
        alt="dinoAsset"
      />
    </div>
  );
}

export default Dino;
