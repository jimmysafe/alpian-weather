import { render, screen } from '@testing-library/react';
import Error from '../Error';

test('Renders Error', () => {
	render(<Error error={{ message: 'Bad Request' }} />);
	const errorMessage = screen.getByRole('errorMessage');
	expect(errorMessage).toHaveTextContent('Bad Request');
});
