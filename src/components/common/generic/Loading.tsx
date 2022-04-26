import Icon from '../elements/Icon';

function Loading() {
	return (
		<div className="h-screen w-screen flex justify-center items-center z-10">
			<Icon
				name="loading"
				accessibilityText="Loading"
				size={50}
				className="text-blue-500"
			/>
		</div>
	);
}

export default Loading;
