import Place from "../Place/Place.js";
import { places } from "../../data/places.ts";

export default function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
