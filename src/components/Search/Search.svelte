<script>
  import { onMount } from "svelte";
  import SuperHeroList from "./SuperHeroList.svelte";
  import SuperHeroService from "../../services/superhero-service";
  import Filters from "./Filters.svelte";
  import SuperHeroDetail from "./SuperHeroDetail.svelte";
  import { default as SuperHeroDetailModel } from "../../models/SuperHeroDetail";
  import InformationModal from "./InformationModal.svelte";
  import store from "../../store.js";

  let superheroes,
    originalSuperHeroes,
    nameFilter = "",
    getSuperHeroPromise = null;

  const service = new SuperHeroService();

  onMount(async () => {
    if (!$store.superHeroes || $store.superHeroes.length === 0) {
      superheroes = originalSuperHeroes = await service.getAll();
      store.setSuperHeroes(superheroes);
    } else {
      superheroes = originalSuperHeroes = $store.superHeroes;
    }
  });

  async function getSuperHero(event) {
    if (event.detail.createdFromApp) {
      getSuperHeroPromise = Promise.resolve(
        getSuperHeroDetailFromStore(event.detail.id)
      );
    } else {
      getSuperHeroPromise = service.getById(event.detail.id);
    }
  }

  function getSuperHeroDetailFromStore(id) {
    let detail = null;
    const superHero = $store.superHeroes.find(s => s.id === id);
    if (superHero) {
      detail = new SuperHeroDetailModel(superHero.id, superHero.name);
    }
    return detail;
  }

  $: {
    if (nameFilter) {
      superheroes = originalSuperHeroes.filter(
        os => os.name.toUpperCase().indexOf(nameFilter.toUpperCase()) !== -1
      );
    } else {
      superheroes = originalSuperHeroes;
    }
  }
</script>

<Filters bind:name={nameFilter} name={nameFilter} />
<SuperHeroList {superheroes} on:superHeroSelected={getSuperHero} />

{#await getSuperHeroPromise}
  <span />
{:then selectedSuperHero}
  {#if selectedSuperHero !== null}
    <SuperHeroDetail
      {selectedSuperHero}
      on:closeDetail={() => (selectedSuperHero = null)} />
  {/if}
{:catch error}
  {#if error.message !== null}
    <InformationModal on:closeModal={() => (error.message = null)}>
      {error.message}
    </InformationModal>
  {/if}
{/await}
