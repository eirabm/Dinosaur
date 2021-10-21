import { render } from '@testing-library/react';

import Dino from './dino';

describe('Dino', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dino />);
    expect(baseElement).toBeTruthy();
  });
});
