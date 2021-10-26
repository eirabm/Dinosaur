import { Dino } from '../dino/dino';
import { Cacti } from '../cacti/cacti';
import { Background } from '../background/background';
import gameOver from './gameOver.png';
import Styles from './layout.module.scss';
import { useEffect, useRef, useState } from 'react';
import Score from '../score/score';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  const [startGame, setStartGame] = useState<null | boolean>(null);
  const dinoRef = useRef<HTMLDivElement>(null);
  const cactiRef = useRef<HTMLDivElement>(null);
  const dinoPosition = dinoRef?.current?.getBoundingClientRect();
  const cactiPosition = cactiRef?.current?.getBoundingClientRect();

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !startGame) {
      setStartGame(true);
    }
  });

  const detectCollision = () => {
    const dinoTop = parseInt(
      window
        .getComputedStyle(dinoRef.current as Element)
        .getPropertyValue('top')
    );
    const cactusLeft = parseInt(
      window
        .getComputedStyle(cactiRef.current as Element)
        .getPropertyValue('left')
    );

    if (cactusLeft < 2 && dinoTop >= 280) {
      setStartGame(false);
    }
  };

  useEffect(() => {
    const watchCollision = setInterval(() => {
      detectCollision();
    }, 10);

    return () => {
      clearInterval(watchCollision);
    };
  }, [cactiPosition, dinoPosition, startGame]);

  return (
    <div className={Styles.layout}>
      <Score start={startGame} />

      <div
        className={Styles.gameOver}
        style={{
          display: startGame === null ? 'none' : startGame ? 'none' : 'block',
        }}
      >
        <img src={gameOver} alt="gameOverAsset" />
      </div>

      <Dino ref={dinoRef} start={startGame} />
      <Cacti ref={cactiRef} start={startGame} />

      <Background start={startGame} />
    </div>
  );
}

export default Layout;
