import { render } from '@testing-library/react';

import Background from './background';

describe('Background', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Background />);
    expect(baseElement).toBeTruthy();
  });
});
