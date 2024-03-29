"use client";

import { Provider } from "react-redux";
import { store, useAppSelector } from "./";
import { setFavoritesPokemon } from "./pokemon/PokemonSlice";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemon") ?? "{}"
    );
    store.dispatch(setFavoritesPokemon(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
