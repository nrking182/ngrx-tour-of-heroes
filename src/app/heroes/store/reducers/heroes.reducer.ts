import * as fromHeroes from "../actions/heroes.actions";
import { Hero } from "../../models/hero";

//test commit
export interface HeroState {
  data: Hero[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: HeroState = {
  data: [{ id: 45, name: "dank" }],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromHeroes.HeroesAction
): HeroState {
  switch (action.type) {
    case fromHeroes.LOAD_HEROES: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromHeroes.LOAD_HEROES_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
    case fromHeroes.LOAD_HEROES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromHeroes.ADD_HERO: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromHeroes.ADD_HERO_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        data: [...state.data, { id: data.id, name: data.name }],
        loading: false,
        loaded: true
      };
    }
    case fromHeroes.ADD_HERO_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromHeroes.DELETE_HERO: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromHeroes.DELETE_HERO_SUCCESS: {
      const actionData = action.payload;
      return {
        ...state,
        data: state.data.filter(hero => hero !== action.payload),
        loading: false,
        loaded: true
      };
    }
    case fromHeroes.DELETE_HERO_FAIL: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
  }
  console.log("INIT STATE::::", state);
  return state;
}

export const getHeroes = (state: HeroState) => state.data;
export const getHeroesLoading = (state: HeroState) => state.loading;
export const getHeroesLoaded = (state: HeroState) => state.loaded;
