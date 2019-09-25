import SuperHero from '../models/SuperHero';

export default class SuperHeroService {
    async getAll() {
        return fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').then((response) =>
            response.json()).then((data) => data.map(s => new SuperHero(s.name, s.images.sm)));
    }
}