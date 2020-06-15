import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { MessagesComponent } from './messages/messages.component';

export const components: any[] = [
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    MessagesComponent
];

export * from './dashboard/dashboard.component'
export * from './hero-detail/hero-detail.component';
export * from './heroes/heroes.component';
export * from './hero-search/hero-search.component';
export * from './messages/messages.component';