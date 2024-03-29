import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface PokemonState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonState => {
//   const favorites = JSON.parse(
//     localStorage.getItem("favorite-pokemon") ?? "{}"
//   );

//   return favorites;
// };

const initialState: PokemonState = {
  // ...getInitialState(),
  favorites: {},
};

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setFavoritesPokemon(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }

      state.favorites[id] = pokemon;
    },
  },
});

export const { toggleFavorite, setFavoritesPokemon } = PokemonSlice.actions;

export default PokemonSlice.reducer;
