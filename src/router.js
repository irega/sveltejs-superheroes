import Search from './components/Search/Search.svelte';
import Creation from './components/Creation/SuperHeroCreation.svelte';
import { writable } from 'svelte/store';
const router = {
    '/': Search,
    '/search': Search,
    '/create': Creation
}
export default router;
export const curRoute = writable('/search');