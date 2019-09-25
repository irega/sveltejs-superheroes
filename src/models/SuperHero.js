export default class SuperHero {
    constructor(id, name, picture) {
        this.id = id;
        this.name = name || '';
        this.picture = picture || '/default-superhero.png';
    }
}