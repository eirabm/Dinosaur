import styles from './app.module.scss';

import { Layout } from '@dinosaur/ui';
import { Link } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <Layout />
      <p>
        This replica from the dinosaur game was made using Nx, React and Sass.{' '}
        {'  '}
        <Link
          to={{ pathname: 'https://github.com/eirabm/Dinosaur' }}
          target="_blank"
        >
          Repository on Github{' '}
        </Link>
      </p>
    </div>
  );
}

export default App;
