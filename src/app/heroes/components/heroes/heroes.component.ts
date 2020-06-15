import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private store: Store<fromStore.HeroesFeatureState>) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    
    this.heroes$ = this.store.select(fromStore.getAllHeroes);
    console.log('in heroes list, state:::', this.store.select(fromStore.getAllHeroes));
  }

  add(name: string): void {
    name = name.trim()
    if (!name) { return; }

    this.store.dispatch(new fromStore.AddHero({name} as Hero))
    // this.heroService.addHero({ name } as Hero)
    //   .subscribe(hero => {
    //     this.heroes$.push(hero);
    //   })
  }

  delete(hero: Hero): void {
    this.store.dispatch(new fromStore.DeleteHero(hero));
    // this.heroes$ = this.heroes$.filter(h => h !== hero);
    // this.heroService.deleteHero(hero.id).subscribe();
  }

}
