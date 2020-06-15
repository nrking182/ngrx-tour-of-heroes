import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const LOAD_HEROES = '[Heroes] Load Heroes'
export const LOAD_HEROES_SUCCESS = '[Heroes] Load Heroes Success'
export const LOAD_HEROES_FAIL = '[Heroes] Load Heroes Fail'
export const ADD_HERO = '[Heroes] Add Hero'
export const ADD_HERO_SUCCESS = '[Heroes] Add Hero Success'
export const ADD_HERO_FAIL = '[Heroes] Add Hero Fail'
export const DELETE_HERO = '[Heroes] Delete Hero'
export const DELETE_HERO_SUCCESS = '[Heroes] Delete Hero Success'
export const DELETE_HERO_FAIL = '[Heroes] Delete Hero Fail'

export class LoadHeroes implements Action {
    readonly type = LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
    readonly type = LOAD_HEROES_SUCCESS;
    constructor(public payload: Hero[]) {}
}

export class LoadHeroesFail implements Action {
    readonly type = LOAD_HEROES_FAIL;
    constructor(public payload: any) {}
}

export class AddHero implements Action {
    readonly type = ADD_HERO;
    constructor(public payload: Hero) {}
}

export class AddHeroSuccess implements Action {
    readonly type = ADD_HERO_SUCCESS;
    constructor(public payload: Hero) {}
}

export class AddHeroFail implements Action {
    readonly type = ADD_HERO_FAIL;
    constructor(public payload: any) {}
}

export class DeleteHero implements Action {
    readonly type = DELETE_HERO;
    constructor(public payload: Hero) {}
}

export class DeleteHeroSuccess implements Action {
    readonly type = DELETE_HERO_SUCCESS;
    constructor(public payload: Hero) {}
}

export class DeleteHeroFail implements Action {
    readonly type = DELETE_HERO_FAIL;
    constructor(public payload: any) {}
}

export type HeroesAction = LoadHeroes | LoadHeroesSuccess | LoadHeroesFail |
                            AddHero | AddHeroSuccess | AddHeroFail |
                            DeleteHero | DeleteHeroSuccess | DeleteHeroFail;