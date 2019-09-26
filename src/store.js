import { writable } from 'svelte/store';

function createStore() {
    const { subscribe, update } = writable({ superHeroes: [], route: '/search' });

    return {
        subscribe,
        setRoute: (route) => update(prev => { prev.route = route; return prev; }),
        setSuperHeroes: (superHeroes) => update(prev => { prev.superHeroes = superHeroes; return prev; }),
    };
}

const store = createStore();
export default store;