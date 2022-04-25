import Card from "../elements/Card";
import Icon from "../elements/Icon";

type ErrorProps = {
  error: any;
};

const __renderError = (error: string) => {
  if (typeof error === "string" && error.includes("429"))
    return `Looks like you made too many requests, please try again in 1 hour.`;
  return error;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return <></>;

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card className="flex flex-col items-center justify-center">
        <Icon
          name="error"
          accessibilityText="Error"
          className="text-red-600 mb-6"
          size={70}
        />
        <p>{__renderError(error.message)}</p>
      </Card>
    </div>
  );
};

export default Error;
