<script>
  import { onDestroy } from "svelte";
  import store from "../../store.js";
  import SuperHero from "../../models/SuperHero";

  let name, totalSuperHeroes;

  function createSuperHero() {
    const superHeroes = $store.superHeroes;
    const lastId = superHeroes[superHeroes.length - 1].id;
    superHeroes.push(new SuperHero(lastId + 1, name, "", true));
    store.setSuperHeroes(superHeroes);
  }

  const unsubscribe = store.subscribe(value => {
    totalSuperHeroes = value.superHeroes.length;
  });

  onDestroy(unsubscribe);
</script>

<style>

</style>

<h1>SuperHero Creation</h1>
<label for="name">Name:</label>
<input type="text" name="name" bind:value={name} />
<button on:click={createSuperHero}>Create</button>
<h2>Total SuperHeroes: {totalSuperHeroes}</h2>
