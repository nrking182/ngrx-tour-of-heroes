import { Effect, Actions, ofType } from '@ngrx/effects';
import * as heroesActions from '../actions/heroes.actions';
import * as fromServices from '../../services';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesEffects {
    constructor(private actions$: Actions, private heroService: fromServices.HeroService) {}

    @Effect()
    loadHeroes$ = this.actions$.pipe(
        ofType(heroesActions.LOAD_HEROES),
        switchMap(() => {
            return this.heroService.getHeroes().pipe(
                map(heroes => new heroesActions.LoadHeroesSuccess(heroes)),
                catchError(error => of(new heroesActions.LoadHeroesFail(error)))
            )
        })
    )

    @Effect()
    addHero$ = this.actions$.pipe(
        ofType(heroesActions.ADD_HERO),
        map((action: heroesActions.AddHero) => action.payload),
        switchMap((hero) => {
            return this.heroService.addHero(hero).pipe(
                map(hero => new heroesActions.AddHeroSuccess(hero),
                catchError(error => of(new heroesActions.AddHeroFail(error))))
            )
        })
    )

    @Effect()
    deleteHero = this.actions$.pipe(
        ofType(heroesActions.DELETE_HERO),
        map((action: heroesActions.DeleteHero) => action.payload),
        switchMap((hero) => {
            const removeHero = hero;
            return this.heroService.deleteHero(hero).pipe(
                map(() => new heroesActions.DeleteHeroSuccess(removeHero),
                catchError(error => of(new heroesActions.DeleteHeroFail(error))))
            )
        })
    )
}