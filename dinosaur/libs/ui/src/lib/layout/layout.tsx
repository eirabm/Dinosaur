import { Dino } from '../dino/dino';
import { Cacti } from '../cacti/cacti';
import { Background } from '../background/background';
import gameOver from './gameOver.png';
import Styles from './layout.module.scss';
import { useEffect, useRef, useState } from 'react';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  const [playerScore, setPlayerScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
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

    if (cactusLeft < 10 && dinoTop >= 250) {
      setStartGame(false);
      setPlayerScore(0);
    }
  };

  useEffect(() => {
    if (startGame) {
      setTimeout(() => setPlayerScore(playerScore + 100), 400);
    }

    const watchCollision = setInterval(() => {
      detectCollision();
    }, 10);

    return () => {
      clearInterval(watchCollision);
    };
  }, [cactiPosition, dinoPosition, playerScore, startGame]);

  return (
    <div className={Styles.layout}>
      <div className={Styles.score}>
        Score:<p>{playerScore}</p>
      </div>

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
