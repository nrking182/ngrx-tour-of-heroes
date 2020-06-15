import { MessageService } from './message.service';
import { HeroService } from './hero.service';
import { InMemoryDataService } from'./in-memory-data.service';


export const services: any[] = [HeroService, InMemoryDataService, MessageService];

export * from './hero.service';
export * from './message.service';
export * from './in-memory-data.service';