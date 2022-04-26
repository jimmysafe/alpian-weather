import SVG from 'react-inlinesvg';
import { useEffect, useState } from 'react';

type IconProps = {
	name: string;
	accessibilityText: string;
	size?: number;
	className?: string;
};

function Icon({
	name,
	size = 24,
	className,
	accessibilityText,
}: IconProps): JSX.Element {
	const [path, setPath] = useState<string>();

	// Imports the SVG
	useEffect(() => {
		(async () => {
			setPath(
				(await import(`../../../assets/icons/${name}.svg`)).default,
			);
		})();
		// eslint-disable-next-line
	}, []);

	if (path)
		return (
			<SVG
				role="icon"
				src={path}
				height={size}
				width={size}
				aria-hidden={false}
				title={accessibilityText}
				aria-label={accessibilityText}
				className={className}
			/>
		);

	// Placeholder
	return (
		<div
			className={`bg-blue-500 bg-opacity-10 rounded-full ${className}`}
			style={{
				height: `${size}px`,
				width: `${size}px`,
			}}
		/>
	);
}

export default Icon;
