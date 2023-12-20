import LocalHostWarning from './LocalHostWarning';
import { render, screen } from '@testing-library/react';

const { getByText, getAllByTestId } = screen;

describe('LocalHostWarning component', () => {
  it('mounts', () => {
    render(<LocalHostWarning />);

    const title = getByText('App running outside of Contentful');
    const textLinks = getAllByTestId('cf-ui-text-link');

    expect(title).toBeVisible();
    expect(textLinks).toHaveLength(3);
  });
});
