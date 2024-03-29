import { FavoritesPokemon } from "@/pokemons";

export const metadata = {
  title: "151 Pokemons",
  description: "Primeros 151 pokemos generados estaticamente.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons Fovoritos <small className="text-blue-500">Global State</small>
      </span>
      <FavoritesPokemon />
    </div>
  );
}
