<script>
  import store from "../../store.js";
  import SuperHero from "../../models/SuperHero";

  let name;

  function createSuperHero() {
    const superHeroes = $store.superHeroes;
    const lastId = superHeroes[superHeroes.length - 1].id;
    superHeroes.push(new SuperHero(lastId + 1, name, "", true));
    store.setSuperHeroes(superHeroes);
    store.setRoute('/search');
  }
</script>

<style>

</style>

<h1>SuperHero Creation</h1>
<label for="name">Name:</label>
<input type="text" name="name" bind:value={name} />
<button on:click={createSuperHero}>Create</button>
