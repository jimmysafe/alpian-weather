import { ReactNode } from 'react';
import Icon from './Icon';

type ButtonProps = {
	children: ReactNode;
	onClick: () => void;
	iconName?: string;
	iconClassName?: string;
	className?: string;
	disabled?: boolean;
};

function Button({
	children,
	onClick,
	iconName,
	className,
	iconClassName,
	disabled,
}: ButtonProps) {
	return (
		<button
			type="button"
			disabled={disabled}
			role="button"
			onClick={onClick}
			className={`flex justify-between items-center disabled:opacity-25 ${className}`}
		>
			{iconName && (
				<Icon
					name={iconName}
					size={20}
					accessibilityText={iconName}
					className={`mr-1 ${iconClassName}`}
				/>
			)}
			{children}
		</button>
	);
}

export default Button;
