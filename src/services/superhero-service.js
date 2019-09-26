import SuperHero from '../models/SuperHero';
import SuperHeroDetail from '../models/SuperHeroDetail';

export default class SuperHeroService {
    async getAll() {
        return fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').then((response) =>
            response.json()).then((data) => data.map(s => new SuperHero(s.id, s.name, s.images.sm)));
    }

    async getById(id) {
        return fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`).then((response) =>
            response.json()).then((data) => new SuperHeroDetail(data.id, data.name, data.images.sm,
                data.biography.fullName, data.appearance.gender, data.appearance.hairColor,
                data.appearance.race, data.appearance.eyeColor));
    }
}