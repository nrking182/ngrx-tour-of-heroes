import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHeroes from './heroes.reducer';

export interface HeroesFeatureState {
    heroes: fromHeroes.HeroState
}

export const reducers: ActionReducerMap<HeroesFeatureState> = {
    heroes: fromHeroes.reducer
}

export const getAppState = createFeatureSelector<HeroesFeatureState>('heroes');

export const getHeroState = createSelector(getAppState, (state: HeroesFeatureState) => state.heroes);

export const getAllHeroes = createSelector(getHeroState, fromHeroes.getHeroes);