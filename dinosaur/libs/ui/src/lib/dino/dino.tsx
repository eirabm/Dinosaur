import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { render } from 'react-dom';
import Styles from './dino.module.scss';
import dinoAsset from './dino.png';

/* eslint-disable-next-line */
export interface DinoProps {
  start: null | boolean;
}

export const Dino = forwardRef(
  (props: DinoProps, ref: React.Ref<HTMLDivElement>) => {
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

    window.addEventListener('keydown', onSpacePressed);

    return (
      <div
        className={[Styles.dino, jump ? Styles.jump : '']
          .filter(Boolean)
          .join(' ')}
        ref={ref}
      >
        <img
          className={props.start ? (crouch ? Styles.crouch : Styles.run) : ''}
          src={dinoAsset}
          alt="dinoAsset"
        />
      </div>
    );
  }
);

export default Dino;
