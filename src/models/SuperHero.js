import DEFAULT_PICTURE from '../constants';

export default class SuperHero {
    constructor(id, name, picture, createdFromApp) {
        this.id = id;
        this.name = name || '';
        this.picture = picture || DEFAULT_PICTURE;
        this.createdFromApp = createdFromApp || false;
    }
}