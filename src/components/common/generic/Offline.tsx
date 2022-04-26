import Container from "../elements/Container";
import { ReactComponent as OfflineIcon } from "../../../assets/icons/no-signal.svg";

type OfflineProps = {
  offline: boolean;
};

const Offline = ({ offline }: OfflineProps) => {
  if (!offline) return <></>;
  return (
    <Container className="lg:w-[65%] md:w-full pt-4">
      <div className="border border-red-500 rounded-md p-3 w-full flex justify-center items-center">
        <OfflineIcon />
        <p className="text-sm text-gray-500 ml-2">
          Looks like you went offline. Please check your internet connection.
        </p>
      </div>
    </Container>
  );
};

export default Offline;
