<script>
  import { onMount } from "svelte";
  import SuperHeroList from "./SuperHeroList.svelte";
  import SuperHeroService from "../services/superhero-service";
  import Filters from "./Filters.svelte";
  import SuperHeroDetail from "./SuperHeroDetail.svelte";

  let superheroes,
    originalSuperHeroes,
    filters,
    selectedSuperHero = null;

  const service = new SuperHeroService();

  onMount(async () => {
    superheroes = originalSuperHeroes = await service.getAll();
  });

  async function setSelectedSuperHero(event) {
    selectedSuperHero = await service.getById(event.detail.id);
  }

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
<SuperHeroList {superheroes} on:superHeroSelected={setSelectedSuperHero} />
{#if selectedSuperHero !== null}
  <SuperHeroDetail
    {selectedSuperHero}
    on:closeDetail={() => (selectedSuperHero = null)} />
{/if}
