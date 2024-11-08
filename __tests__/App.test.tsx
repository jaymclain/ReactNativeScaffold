/**
 * @format
 */

import { render, screen } from '@testing-library/react-native';
import App from '../App';

test('renders App component', () => {
  render(<App />);
  const textElement = screen.getByText('Stay in touch with the community, join in on Q&As and more by following React Native on X.');
  expect(textElement).toBeTruthy();
});
