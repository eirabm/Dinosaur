import { useEffect, useState } from 'react';
import Styles from './score.module.scss';

/* eslint-disable-next-line */
export interface ScoreProps {
  start: null | boolean;
}

export function Score(props: ScoreProps) {
  const [playerScore, setPlayerScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (props.start) {
      const scoreInterval = setInterval(
        () => setPlayerScore(playerScore + 100),
        400
      );
      return () => {
        clearInterval(scoreInterval);
      };
    } else {
      if (highScore < playerScore) setHighScore(playerScore);
      setPlayerScore(0);
      return;
    }
  }, [playerScore, props.start, highScore]);

  return (
    <>
      <div className={Styles.highScore}>
        High Score:<p>{highScore}</p>
      </div>
      <div className={Styles.score}>
        Score:<p>{playerScore}</p>
      </div>
    </>
  );
}

export default Score;
