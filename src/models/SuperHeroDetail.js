export default class SuperHeroDetail {
    constructor(id, name, picture, fullName, gender, hairColor, race, eyeColor) {
        this.id = id;
        this.name = name || '';
        this.picture = picture || '/default-superhero.png';
        this.fullName = fullName || '';
        this.gender = gender || '';
        this.hairColor = hairColor || '';
        this.race = race || '';
        this.eyeColor = eyeColor || '';
    }
}