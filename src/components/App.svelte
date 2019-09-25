<script>
  import { onMount } from "svelte";
  import SuperHeroList from "./SuperHeroList.svelte";
  import SuperHeroService from "../services/superhero-service";
  import Filters from "./Filters.svelte";

  let superheroes, originalSuperHeroes, filters;

  onMount(async () => {
    let service = new SuperHeroService();
    superheroes = originalSuperHeroes = await service.getAll();
  });

  $: {
    if (filters && filters.name) {
      superheroes = originalSuperHeroes.filter(
        os => os.name.toUpperCase().indexOf(filters.name.toUpperCase()) !== -1
      );
    } else {
      superheroes = originalSuperHeroes;
    }
  }
</script>

<Filters on:filtersModified={event => (filters = event.detail.filters)} />
<SuperHeroList {superheroes} />
