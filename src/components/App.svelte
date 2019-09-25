<script>
  import SuperHeroList from "./SuperHeroList.svelte";
  import SuperHeroService from "../services/superhero-service";

  let superheroes;

  async function searchSuperHeroes() {
    let service = new SuperHeroService();
    superheroes = await service.getAll();
  }
</script>

<style>

</style>

<button on:click={searchSuperHeroes}>Search SuperHeroes</button>
<SuperHeroList {superheroes} />
