import Icon from "../elements/Icon";

type LocationHeaderProps = {
  location: string;
};

const LocationHeader = ({ location }: LocationHeaderProps) => {
  return (
    <div className="flex justify-center items-center  mb-10">
      <Icon
        name="map-pin"
        accessibilityText="Location"
        size={20}
        className="text-gray-400 mr-1"
      />
      <h1 className="text-gray-400">{location}</h1>
    </div>
  );
};

export default LocationHeader;
