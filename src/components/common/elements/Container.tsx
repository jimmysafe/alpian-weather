import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
	className?: string;
	tight?: boolean;
};

function Container({ children, className, tight }: ContainerProps) {
	return (
		<section
			className={`${
				tight ? 'max-w-xl' : 'container'
			} mx-auto ${className}`}
		>
			{children}
		</section>
	);
}

export default Container;
