import Search from './components/Search/Search.svelte';
import Creation from './components/Creation/SuperHeroCreation.svelte';
const router = {
    '/': Search,
    '/search': Search,
    '/create': Creation
}
export default router;