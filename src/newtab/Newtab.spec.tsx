import { render, screen } from '@testing-library/react';
import NewTab from './Newtab';

it('should load and display Popup', async () => {
  render(<NewTab />);

  expect(screen.getByText('Popup Counter')).toBeInTheDocument();
});
