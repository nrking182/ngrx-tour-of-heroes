import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { getAllHeroes } from '../../store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<fromStore.HeroesFeatureState>,
    private heroService: HeroService) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadHeroes());
    this.heroes$ = this.store.select(fromStore.getAllHeroes);
    console.log(this.store.select(fromStore.getAppState));
    // this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}