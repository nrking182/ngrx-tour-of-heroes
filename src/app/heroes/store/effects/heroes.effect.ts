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
            console.log('in EFFECT');
            return this.heroService.getHeroes().pipe(
                map(heroes => new heroesActions.LoadHeroesSuccess(heroes)),
                catchError(error => of(new heroesActions.LoadHeroesFail(error)))
            )
        })

    )
}