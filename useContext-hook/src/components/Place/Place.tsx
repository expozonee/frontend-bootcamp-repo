import PlaceImage from "../PlaceImage/PlaceImage";

// types
import type { PlaceProps } from "../../types/PlaceProps";

export default function Place({ place }: PlaceProps) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}
