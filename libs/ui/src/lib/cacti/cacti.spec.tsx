import { render } from '@testing-library/react';

import Cacti from './cacti';

describe('Cacti', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cacti />);
    expect(baseElement).toBeTruthy();
  });
});
