import { createContext, ReactNode, useContext, useState } from "react";

type PlacesProviderProps = {
  children: ReactNode;
};

type PlacesContext = {
  useLarge(): {
    isLarge: boolean;
    setIsLarge: React.Dispatch<React.SetStateAction<boolean>>;
    imageSize: number;
  };
};

const PlacesContext = createContext<PlacesContext | null>(null);

export default function PlacesProvider({ children }: PlacesProviderProps) {
  const [isLarge, setIsLarge] = useState(false);
  function useLarge() {
    const imageSize = isLarge ? 150 : 100;

    return {
      isLarge,
      setIsLarge,
      imageSize,
    };
  }

  return (
    <PlacesContext.Provider value={{ useLarge }}>
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
