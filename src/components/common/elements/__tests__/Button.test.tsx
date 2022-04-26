import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

test('Button Exists and gets Clicked', () => {
	const onClick = jest.fn();
	render(<Button onClick={onClick}>Refresh</Button>);
	const button = screen.getByRole('button');
	expect(button).toHaveTextContent('Refresh');
	fireEvent.click(button);
	expect(onClick).toHaveBeenCalledTimes(1);
});
