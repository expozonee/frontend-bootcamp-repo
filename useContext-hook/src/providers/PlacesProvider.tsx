import { createContext, ReactNode, useContext, useState } from "react";
import { places } from "../data/places";

type PlacesProviderProps = {
  children: ReactNode;
};

type PlacesContext = {
  places: typeof places;
  useLarge(): {
    isLarge: boolean;
    setIsLarge: React.Dispatch<React.SetStateAction<boolean>>;
    imageSize: number;
  };
};

const PlacesContext = createContext<PlacesContext | null>(null);

export default function PlacesProvider({ children }: PlacesProviderProps) {
  function useLarge() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;

    return {
      isLarge,
      setIsLarge,
      imageSize,
    };
  }

  return (
    <PlacesContext.Provider value={{ places, useLarge }}>
      {children}
    </PlacesContext.Provider>
  );
}

export function usePlaces() {
  const placesContext = useContext(PlacesContext);

  if (placesContext === null) {
    throw new Error("usePlaces must be used within a PlacesProvider");
  }

  return placesContext;
}
