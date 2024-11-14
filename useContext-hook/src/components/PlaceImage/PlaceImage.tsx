import { usePlaces } from "../../providers/PlacesProvider";
import { Place } from "../../types/Place";
import { getImageUrl } from "../../utils";

type PlaceImageProps = {
  place: Place;
};

export default function PlaceImage({ place }: PlaceImageProps) {
  const { useLarge } = usePlaces();
  const { imageSize } = useLarge();
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
