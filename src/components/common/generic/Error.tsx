import Card from '../elements/Card';
import Icon from '../elements/Icon';
import ReloadButton from '../extensive/ReloadButton';

type ErrorProps = {
	error: any;
};

function __renderError(error: string) {
	if (error.includes('429'))
		return (
			<p>
				Looks like you made too many requests, <br /> please try again
				in 1 hour.
			</p>
		);
	if (error.includes('403'))
		return (
			<div className="flex flex-col items-center justify-center text-center">
				<p className="mb-4">
					You must enable CORS support <br /> please visit{' '}
					<a
						className="text-blue-500 underline"
						href="https://cors-anywhere.herokuapp.com/corsdemo"
						target="_blank"
						rel="noreferrer"
					>
						this page
					</a>
					. then refresh this page
				</p>
				<ReloadButton onReload={() => window.location.reload()} />
			</div>
		);
	return error;
}

function Error({ error }: ErrorProps) {
	if (!error) return null;

	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<Card className="flex flex-col items-center justify-center">
				<Icon
					name="error"
					accessibilityText="Error"
					className="text-red-600 mb-6"
					size={70}
				/>
				<div role="errorMessage">{__renderError(error.message)}</div>
			</Card>
		</div>
	);
}

export default Error;
