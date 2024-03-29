"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemon = () => {
  const favoritesPokemon = useAppSelector((state) =>
    Object.values(state.pokemon.favorites)
  );
  // const [pokemon, setPokemon] = useState(favoritesPokemon);

  return (
    <>
      {favoritesPokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favoritesPokemon} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-600" />
      <span>No hay favoritos</span>
    </div>
  );
};
