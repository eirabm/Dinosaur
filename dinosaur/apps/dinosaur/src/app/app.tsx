import styles from './app.module.scss';

import { Layout } from '@dinosaur/ui';

export function App() {
  return (
    <div className={styles.app}>
      <Layout />
    </div>
  );
}

export default App;
