<script>
  import { onMount } from "svelte";
  import SuperHeroList from "./SuperHeroList.svelte";
  import SuperHeroService from "../services/superhero-service";

  let superheroes, originalSuperHeroes, nameFilter;

  onMount(async () => {
    let service = new SuperHeroService();
    superheroes = originalSuperHeroes = await service.getAll();
  });

  $: {
    if (nameFilter) {
      superheroes = originalSuperHeroes.filter(
        os => os.name.toUpperCase().indexOf(nameFilter.toUpperCase()) !== -1
      );
    } else {
      superheroes = originalSuperHeroes;
    }
  }

  function clearFilter() {
    nameFilter = "";
  }
</script>

<style>
  .filter-title {
    margin-bottom: 5px;
  }
</style>

<label class="filter-title" for="name">Search SuperHero:</label>
<input type="text" name="name" bind:value={nameFilter} />
<button on:click={clearFilter}>Clear</button>
<SuperHeroList {superheroes} />
