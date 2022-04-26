import { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
	className?: string;
};

function Card({ className, children }: CardProps) {
	return (
		<div
			role="card"
			className={`shadow p-4 rounded-lg bg-white ${className} `}
		>
			{children}
		</div>
	);
}

export default Card;
