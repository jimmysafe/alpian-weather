import { render, screen } from '@testing-library/react';
import Card from '../Card';

test('Renders Card', () => {
	render(<Card>Card Content</Card>);
	const cardElement = screen.getByRole('card');
	expect(cardElement).toHaveTextContent('Card Content');
});
