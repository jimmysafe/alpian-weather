import Button from "../elements/Button";

type ReloadButtonProps = {
  onReload: () => void;
};

const ReloadButton = ({ onReload }: ReloadButtonProps) => {
  return (
    <div className="flex justify-end items-center">
      <Button
        iconName="reload"
        onClick={onReload}
        className="bg-blue-500 px-4 py-2 rounded-md text-white text-sm font-thin transform hover:scale-[105%] duration-200 mb-6"
      >
        Reload
      </Button>
    </div>
  );
};

export default ReloadButton;
